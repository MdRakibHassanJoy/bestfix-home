interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const maxW = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <div className={`${alignClass} ${maxW} mb-10 md:mb-14`}>
      {eyebrow && (
        <span
          className={`text-xs font-utility font-medium uppercase tracking-widest mb-3 block ${
            dark ? "text-flame-dark-link" : "text-flame-button"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-display leading-tight ${
          dark ? "text-white" : "text-charred"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-gray-300" : "text-iron"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
