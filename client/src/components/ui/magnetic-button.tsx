import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const MagneticButton = ({
  children,
  className = '',
  href,
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const button = buttonRef.current;
    
    if (!button) return;
    
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.3, y: y * 0.5 });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  const ButtonContent = (
    <motion.div
      ref={buttonRef}
      className={`inline-block ${className} hoverable`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
  
  if (href) {
    return <a href={href}>{ButtonContent}</a>;
  }
  
  return ButtonContent;
};

export default MagneticButton;
