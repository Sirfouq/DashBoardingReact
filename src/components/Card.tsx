// RevenueCard.tsx
import React from 'react';

interface CardProps {
  title: string;
  startColor: string; // Color at the start of the gradient
  endColor: string;   // Color at the end of the gradient
}

const CardComp = ({ title, startColor, endColor }: CardProps) => {
  // Use inline styling to set a vertical gradient background
  const cardStyle = {
    background: `linear-gradient(${startColor}, ${endColor})`,
  };

  return (
    <>
      <style>
        {`
          .card-hover:hover {
            background-color: #CCE0E0 !important;
            background-image: none !important; 
          }
        `}
      </style>
      <div style={cardStyle} className="rounded-lg shadow-md p-6 max-w-lg transition-colors duration-200 card-hover">
        <div className="flex justify-between items-center mb-4">
          <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
            
          </button>
        </div>
        <div className="text-3xl font-bold text-gray-800">{title}</div>
        {/* Placeholder for the bar chart */}
        <div className="mt-6 bg-gray-100 rounded-md h-24 flex items-center justify-center">
          {/* Content goes here */}
        </div>
      </div>
    </>
  );
};

export default CardComp;
