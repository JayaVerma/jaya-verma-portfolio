import { Download } from "lucide-react";
import { cn } from "@/lib/cn";

interface DownloadButtonProps {
  href: string;
  download?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function DownloadButton({
  href,
  download,
  children,
  variant = "primary",
  className,
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-violet via-fuchsia to-cyan bg-[length:200%_auto] text-white shadow-[0_8px_30px_-8px_rgba(192,132,252,0.6)] hover:bg-[position:100%_center] hover:shadow-[0_10px_40px_-8px_rgba(225,81,232,0.7)]",
        variant === "outline" &&
          "border border-line-2 text-cream hover:border-fuchsia hover:text-fuchsia",
        className
      )}
    >
      <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      {children}
    </a>
  );
}
