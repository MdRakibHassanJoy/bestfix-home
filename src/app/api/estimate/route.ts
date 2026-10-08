import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sendEstimateEmail } from "@/lib/email";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4 MB cap

export async function POST(request: NextRequest) {
  // Rate limiting per IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const { allowed, retryAfter } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        error: `Too many requests. Please try again in ${Math.ceil(
          (retryAfter || 60000) / 60000
        )} minutes, or call dispatch at (484) 272-5220.`,
      },
      { status: 429 }
    );
  }

  try {
    const formData = await request.formData();

    // Honeypot spam trap
    const honeypot = formData.get("honeypot") as string;
    if (honeypot) {
      // Silently discard spam bots
      return NextResponse.json({ success: true });
    }

    // Extract fields
    const name = ((formData.get("name") as string) || "").trim();
    const phone = ((formData.get("phone") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const zip = ((formData.get("zip") as string) || "").trim();
    const description = ((formData.get("description") as string) || "").trim();
    const timeframe = ((formData.get("timeframe") as string) || "").trim() || undefined;
    const materialsStatus = ((formData.get("materialsStatus") as string) || "").trim() || undefined;
    const paintingNeeded = ((formData.get("paintingNeeded") as string) || "").trim() || undefined;
    const address = ((formData.get("address") as string) || "").trim() || undefined;
    const city = ((formData.get("city") as string) || "").trim() || undefined;

    // Strict Server-Side Validation
    if (!name || !phone || !email || !zip || !description) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!/^\d{5}$/.test(zip)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 5-digit US ZIP code." },
        { status: 400 }
      );
    }

    // File security validation
    const photos = formData.getAll("photos") as File[];
    let totalBytes = 0;

    for (const photo of photos) {
      if (photo && photo.size > 0) {
        if (!ALLOWED_MIME_TYPES.has(photo.type)) {
          return NextResponse.json(
            { success: false, error: "Unsupported file type. Please upload JPEG, PNG, or WebP images." },
            { status: 400 }
          );
        }
        totalBytes += photo.size;
      }
    }

    if (totalBytes > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        { success: false, error: "Uploaded photos exceed the 4 MB total size cap. Please compress images before uploading." },
        { status: 400 }
      );
    }

    const photoInfo =
      photos.length > 0
        ? `${photos.length} photo(s) attached (${photos.map((p) => p.name).join(", ")})`
        : undefined;

    // Send email dispatch
    const result = await sendEstimateEmail({
      name,
      phone,
      email,
      zip,
      description,
      timeframe,
      materialsStatus,
      paintingNeeded,
      address,
      city,
      images: photoInfo ? [photoInfo] : undefined,
    });

    if (!result.success) {
      console.error("Email send failed:", result.error);
      return NextResponse.json(
        { success: false, error: "We couldn't transmit your request right now. Please call dispatch directly at (484) 272-5220." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please call dispatch at (484) 272-5220." },
      { status: 500 }
    );
  }
}
