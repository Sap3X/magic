import React, { useEffect, useRef, useState } from 'react';

const AutoShow = ({ children, className = '', style = {} }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element should start animating (70% from bottom)
      const triggerPoint = windowHeight * 0.7;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start animation when element is 70% from bottom
      // Complete when element reaches top
      const startPoint = triggerPoint;
      const endPoint = 0;
      
      let progress = 0;
      
      if (elementTop <= startPoint && elementTop >= endPoint) {
        progress = (startPoint - elementTop) / (startPoint - endPoint);
        progress = Math.max(0, Math.min(1, progress));
      } else if (elementTop < endPoint) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      // Cancel previous frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Only update if scroll position actually changed
      if (window.scrollY !== lastScrollY.current) {
        lastScrollY.current = window.scrollY;
        
        // Schedule update for next frame
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    // Initial check
    updateProgress();
    
    // Listen to scroll events with passive listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Smooth easing function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(scrollProgress);

  const animationStyles = {
    opacity: easedProgress,
    transform: `translateY(${(1 - easedProgress) * 100}px) scale(${0.3 + easedProgress * 0.7})`,
    willChange: scrollProgress > 0 && scrollProgress < 1 ? 'transform, opacity' : 'auto',
    ...style
  };

  return (
    <div 
      ref={elementRef}
      className={className}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default AutoShow;