import React from "react";

interface CircularTextProps {
  text: string;
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  size = 150,
  color = "black",
  speed = 10,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>

        <text className="circular-text" style={{ 
          fontSize: "14px",
          fill: color,
          textTransform: "uppercase",
          letterSpacing: "2px",
          animation: `rotateText ${speed}s linear infinite`
        }}>
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText; 