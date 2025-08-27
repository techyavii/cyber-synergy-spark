import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 50 }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div 
        className="inline-block animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
      >
        {children}
      </div>
    </div>
  );
}