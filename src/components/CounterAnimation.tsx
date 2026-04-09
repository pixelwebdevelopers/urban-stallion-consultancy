import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

const CounterAnimation = ({ end, suffix = "", duration = 2000, label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gold">
        {count}{suffix}
      </div>
      <p className="text-sm md:text-base text-white/70 mt-2 font-body">{label}</p>
    </div>
  );
};

export default CounterAnimation;
