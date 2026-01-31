import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

// Register Plugin outside component to avoid re-registration
gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimations Hook
 * applies professional, subtle scroll animations to elements with specific class names.
 * 
 * Classes to use:
 * - .animate-fade-up: Standard fade up for headings/text
 * - .animate-fade-in: Simple opacity fade
 * - .animate-stagger-container + .animate-stagger-item: For lists/grids (cards)
 */
export const useScrollAnimations = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Accessibility Check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Cleanup previous triggers before creating new ones (crucial for SPA navigation)
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Context for easy cleanup
        let ctx = gsap.context(() => {

            if (prefersReducedMotion) {
                // Determine elements to immediately show
                gsap.set('.animate-fade-up, .animate-fade-in, .animate-stagger-item', {
                    opacity: 1, y: 0, visibility: 'visible'
                });
                return;
            }

            // --- Configuration for "Legal/Trustworthy" Motion ---
            const baseConfig = {
                duration: 0.8,
                ease: "power3.out", // Smooth, professional deceleration
            };

            const triggerConfig = (triggerEl, start = "top 85%") => ({
                trigger: triggerEl,
                start: start,
                toggleActions: "play none none none", // Animate once, don't reverse
            });

            // 1. Fade Up Elements (Use for Headings, P, Single Images)
            const fadeUps = gsap.utils.toArray('.animate-fade-up');
            fadeUps.forEach(el => {
                gsap.fromTo(el,
                    { y: 30, opacity: 0 },
                    {
                        ...baseConfig,
                        scrollTrigger: triggerConfig(el),
                        y: 0,
                        opacity: 1,
                        clearProps: "transform" // Clean up after animation to prevent layout issues
                    }
                );
            });

            // 2. Simple Fade In (Use for Backgrounds or large sections)
            const fadeIns = gsap.utils.toArray('.animate-fade-in');
            fadeIns.forEach(el => {
                gsap.fromTo(el,
                    { opacity: 0 },
                    {
                        ...baseConfig,
                        duration: 1.2, // Slower for pure fades
                        scrollTrigger: triggerConfig(el, "top 90%"),
                        opacity: 1
                    }
                );
            });

            // 3. Staggered Lists (Cards, Features, Menus)
            // Apply .animate-stagger-container to the parent (ul, grid div)
            // Apply .animate-stagger-item to the children (li, card div)
            const staggerContainers = gsap.utils.toArray('.animate-stagger-container');
            staggerContainers.forEach(container => {
                const items = container.querySelectorAll('.animate-stagger-item');

                if (items.length > 0) {
                    gsap.fromTo(items,
                        { y: 20, opacity: 0 },
                        {
                            ...baseConfig,
                            scrollTrigger: triggerConfig(container, "top 80%"),
                            y: 0,
                            opacity: 1,
                            stagger: 0.15, // Subtle delay between items
                            clearProps: "transform"
                        }
                    );
                }
            });

        });

        return () => ctx.revert(); // Cleanup GSAP context on unmount/route change

    }, [location.pathname]); // Re-run when route changes
};
