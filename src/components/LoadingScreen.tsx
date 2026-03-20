import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Binary rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-xs"
            style={{
              left: `${i * 5}%`,
              animation: `binary-rain ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Hexagon loader */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background" />
            </div>
          </div>

          {/* Inner hexagon effect */}
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg rotate-45 glow-cyan" />
          </div>

          {/* Orbiting particles */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: `orbit ${3 + i}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full bg-primary"
                style={{ transform: `translateX(60px)` }}
              />
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="mt-4 font-display text-lg text-foreground">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
