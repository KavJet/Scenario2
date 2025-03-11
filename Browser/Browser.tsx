import { useState, useRef, useEffect } from "react";
import "./Browser.css";

type MacBrowserProps = {
  initialUrl: string;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number, y: number };
};

const Browser = ({ initialUrl, onClose, children, initialPosition = { x: 100, y: 100 } }: MacBrowserProps) => {
  const [url, setUrl] = useState(initialUrl);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const browserRef = useRef<HTMLDivElement>(null);

  // Start dragging - now works on the entire browser window
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent dragging when clicking on interactive elements
    if (e.target instanceof HTMLElement) {
      const tagName = e.target.tagName.toLowerCase();
      const isButton = tagName === 'button' || e.target.closest('button');
      const isInput = tagName === 'input' || tagName === 'textarea' || e.target.closest('input, textarea');
      
      // Don't start dragging if clicking on interactive elements
      if (isButton || isInput) {
        return;
      }
    }

    if (browserRef.current) {
      const rect = browserRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  // Handle dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach and detach event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={browserRef}
      className="mac-browser-window"
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: isDragging ? 1000 : 999,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none', // Prevent text selection during drag
      }}
    >
      <div className="mac-browser-header">
        <div className="mac-browser-buttons">
          <button onClick={onClose} className="mac-close-btn"></button>
          <div className="mac-minimize-btn"></div>
          <div className="mac-maximize-btn"></div>
        </div>
        <div className="mac-browser-address-bar">
          <span>{url}</span>
        </div>
      </div>
      <div 
        className="mac-browser-content"
        style={{ cursor: 'default' }} // Reset cursor for content area
      >
        {children}
      </div>
    </div>
  );
};

export default Browser;