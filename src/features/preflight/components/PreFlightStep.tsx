import { cn } from "@/lib/utils";

type PreFlightStepProps = {
  visible: boolean;
  animate?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function PreFlightStep({
  visible,
  animate = true,
  className,
  children,
}: PreFlightStepProps) {
  return (
    <div
      className={cn(
        "w-full max-w-lg",
        animate &&
          "motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-in-out",
        visible ? "opacity-100" : "opacity-0",
        !visible && animate && "pointer-events-none",
        className,
      )}
      aria-hidden={animate ? !visible : undefined}
    >
      {children}
    </div>
  );
}
