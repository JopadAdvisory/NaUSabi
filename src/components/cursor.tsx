import { useEffect, useRef } from "react";
import '../index.css'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    document.documentElement.style.setProperty(
      "--mouse-x",
      `${e.clientX / 30}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${e.clientY / 30}px`
    );
  };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const glow = glowRef.current;

    const targets = document.querySelectorAll(".glow-target");

    targets.forEach(target => {
        target.addEventListener("mouseenter", () => {
        glow?.classList.add("active");
        });

        target.addEventListener("mouseleave", () => {
        glow?.classList.remove("active");
        });
    });
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
}