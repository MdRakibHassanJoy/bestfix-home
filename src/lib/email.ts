import { Resend } from 'resend';

// Lazy initialization — only creates the client when actually called, not at build time
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY environment variable is missing');
  return new Resend(key);
}

export interface EstimateEmailData {
  name: string;
  phone: string;
  email: string;
  zip: string;
  description: string;
  timeframe?: string;
  materialsStatus?: string;
  paintingNeeded?: string;
  address?: string;
  city?: string;
  images?: string[];
}

export async function sendEstimateEmail(data: EstimateEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const to = process.env.EMAIL_TO || 'info@bestfixhome.com';
    const cc = process.env.EMAIL_CC || 'contact@bestfixhome.com';
    const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';

    // Development fallback if Resend API key is not yet configured in .env.local
    if (!process.env.RESEND_API_KEY) {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 [DEV ESTIMATE DISPATCH SIMULATION]');
      console.log(`To: ${to} (CC: ${cc}) | From: ${from}`);
      console.log(`Customer: ${data.name} | Phone: ${data.phone} | Email: ${data.email} | Zip: ${data.zip}`);
      console.log(`Description: ${data.description}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      return { success: true };
    }

    const htmlBody = `
      <h2>New Estimate Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Zip Code:</strong> ${data.zip}</p>
      ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ''}
      ${data.city ? `<p><strong>City:</strong> ${data.city}</p>` : ''}
      
      <h3>Project Details</h3>
      <p>${data.description}</p>
      
      ${data.timeframe ? `<p><strong>Timeframe:</strong> ${data.timeframe}</p>` : ''}
      ${data.materialsStatus ? `<p><strong>Materials:</strong> ${data.materialsStatus}</p>` : ''}
      ${data.paintingNeeded ? `<p><strong>Painting Needed:</strong> ${data.paintingNeeded}</p>` : ''}
      
      ${data.images && data.images.length > 0 ? `<p><strong>Images Attached:</strong> Yes (${data.images.length})</p>` : ''}
    `;

    const emailPayload: any = {
      from,
      to,
      subject: `New Estimate Request from ${data.name}`,
      html: htmlBody,
    };

    if (cc) {
      emailPayload.cc = cc;
    }

    const { data: resendData, error } = await getResend().emails.send(emailPayload);

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Failed to send estimate email:', err);
    return { success: false, error: err.message || 'Unknown error occurred' };
  }
}
