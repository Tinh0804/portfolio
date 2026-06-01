import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Cập nhật tọa độ chuột trực tiếp vào DOM thay vì dùng state (tránh re-render liên tục gây lag)
    const updateMousePosition = (e) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        
        outlineRef.current.style.left = `${e.clientX}px`;
        outlineRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Kiểm tra xem chuột có đang trỏ vào element nào có thể tương tác không
    const handleMouseOver = (e) => {
      // Tìm các thẻ a, button, hoặc các class có tính tương tác
      if (e.target.closest('a, button, .interactive, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className={`cursor-dot hidden md:block ${isHovering ? 'hovering' : ''}`}
      ></div>
      <div 
        ref={outlineRef}
        className={`cursor-outline hidden md:block ${isHovering ? 'hovering' : ''}`}
      ></div>
    </>
  );
};

export default CustomCursor;
