import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track hoverable elements
    const hoverables = document.querySelectorAll('button, a, [role="button"]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth follower animation
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div
          className={`w-2 h-2 bg-white rounded-full transition-transform duration-150 ${
            isHovering ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>

      {/* Follower */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: followerPosition.x - (isHovering ? 24 : 16),
          top: followerPosition.y - (isHovering ? 24 : 16),
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isHovering
              ? 'w-12 h-12 border-primary bg-primary/20'
              : 'w-8 h-8 border-white/50'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
