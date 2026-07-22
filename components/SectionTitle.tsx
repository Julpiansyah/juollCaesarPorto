import clsx from "clsx";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  subtitleColor?: string;
  barColor?: string;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  subtitleColor = "text-cyan-neon",
  barColor = "bg-cyan-neon",
  className,
}: SectionTitleProps) {
  return (
    <div className={clsx("text-center mb-16", className)}>
      <p className={clsx("pixel-font text-xs sm:text-sm mb-4", subtitleColor)}>
        {subtitle}
      </p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      <div className={clsx("w-32 h-2 mx-auto mt-4", barColor)} />
    </div>
  );
}
