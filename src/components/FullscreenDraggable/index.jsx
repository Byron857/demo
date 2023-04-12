import React, { useRef, useEffect } from "react";

function FullscreenDraggable({ children }) {
    const dragRef = useRef(null);

    useEffect(() => {
        const handleMouseDown = (event) => {

            if (event.button !== 0) {
                return;
            }
            event.preventDefault();

            const el = dragRef.current;
            const startX = event.clientX - el.offsetLeft;
            const startY = event.clientY - el.offsetTop;
            const maxX = window.innerWidth - el.offsetWidth;
            const maxY = window.innerHeight - el.offsetHeight;

            const handleMouseMove = (event) => {
                event.preventDefault();

                const x = Math.min(Math.max(event.clientX - startX, 0), maxX);
                const y = Math.min(Math.max(event.clientY - startY, 0), maxY);

                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        dragRef.current.addEventListener("mousedown", handleMouseDown);

        return () => {
            dragRef.current.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return <div ref={dragRef} style={{ position: 'relative', width: 100, height: 100 }}> {children}</div>;
}

export default FullscreenDraggable
