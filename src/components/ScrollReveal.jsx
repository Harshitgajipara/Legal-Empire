import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollReveal Hook - Implements Intersection Observer for smooth scroll animations
 * Usage: Place the scroll-reveal class on elements you want to animate
 * Add 'active' class when element enters viewport (once only)
 */
export const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset all active animations when page changes
    document
      .querySelectorAll(
        ".scroll-reveal.active, .scroll-reveal-left.active, .scroll-reveal-right.active, .scroll-reveal-stagger.active, .text-reveal.active, .court-list-item.active, .court-item.active"
      )
      .forEach((el) => {
        el.classList.remove("active");
      });

    // Create Intersection Observer options with optimized threshold
    const observerOptions = {
      threshold: [0, 0.1, 0.25], // Trigger at multiple points as element enters viewport
      rootMargin: "0px 0px -80px 0px", // Start animation 80px before element is fully in view
    };

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only animate once - if already animated, skip
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("active")
        ) {
          // Add active class to trigger animation immediately when element enters viewport
          requestAnimationFrame(() => {
            entry.target.classList.add("active");
          });
          // Stop observing this element - animation will not repeat
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal classes
    const scrollRevealElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger, .text-reveal, .court-list-item, .court-item"
    );

    scrollRevealElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      scrollRevealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [location.pathname]);
};

/**
 * ScrollReveal Component - Wrapper component that applies scroll animations
 * Props:
 *   - children: JSX to render
 *   - className: Additional CSS classes (scroll-reveal class will be added)
 *   - type: 'default' | 'left' | 'right' | 'stagger' (default: 'default')
 */
export const ScrollReveal = ({
  children,
  className = "",
  type = "default",
}) => {
  useScrollReveal();

  let revealClass = "scroll-reveal";
  if (type === "left") revealClass = "scroll-reveal-left";
  if (type === "right") revealClass = "scroll-reveal-right";
  if (type === "stagger") revealClass = "scroll-reveal-stagger";

  return <div className={`${revealClass} ${className}`}>{children}</div>;
};

export default ScrollReveal;
