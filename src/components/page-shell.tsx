import { cn } from "@/lib/utils";

interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export function PageShell({
  children,
  as: Comp = "div", // Changed from main to div to avoid multiple <main> elements
  className,
  ...props
}: PageShellProps) {
  return (
    <Comp
      className={cn(
        "flex-1",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
