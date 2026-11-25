import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    if (!finePointer) return undefined;

    const handleMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      setIsVisible((prev) => (prev ? prev : true));
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.closest(".clickable");

      setIsHovered(Boolean(isInteractive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    let animId;
    const updateOutline = () => {
      const ease = 0.16;
      outlinePos.current.x += (targetPos.current.x - outlinePos.current.x) * ease;
      outlinePos.current.y += (targetPos.current.y - outlinePos.current.y) * ease;
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePos.current.x}px`;
        outlineRef.current.style.top = `${outlinePos.current.y}px`;
      }
      animId = requestAnimationFrame(updateOutline);
    };
    animId = requestAnimationFrame(updateOutline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Solid Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot hidden md:block"
      />
      {/* Outer Trailing Circle */}
      <div
        ref={outlineRef}
        className={`custom-cursor-outline hidden md:block ${
          isHovered ? "custom-cursor-hover" : ""
        } ${isClicked ? "custom-cursor-click" : ""}`}
      />
    </>
  );
}
