// RevenueCard.tsx
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  hover_descr: string; // Make sure to import ReactNode from 'react' if not already done
}

const CardComp = ({ title, icon,hover_descr }: CardProps) => {
  return (
    <>
      <style>
        {`
          .card-hover {
            position: relative;
            
            transition: transform 0.3s ease-in-out;
          }
          .card-hover::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0);
            transition: background-color 0.3s ease-in-out;
          }
          .card-hover:hover {
            transform: scale(1.05);
          }
          .card-hover:hover::after {
            background: rgba(0, 0, 0, 0.6);
          }
          .hover-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            z-index: 20; /* Above the ::after pseudo-element */
            display: flex;
            align-items: center;
            gap: 12px; /* Space between text and arrow */
          }
          .card-hover:hover .hover-content {
            opacity: 1; /* Make text and arrow visible on hover */
          }
        `}
      </style>
      <div className="rounded-lg shadow-md p-6 max-w-lg card-hover relative">
        <div className="flex justify-between items-center gap-4 mb-4"> {/* Use gap to create space between icon and title */}
          <div className="icon-container flex items-center justify-center"> {/* Flex container for the icon */}
            {icon}
          </div>
          <div className="text-2xl font-mono font-bold text-gray-800">{title}</div>
        </div>
        <div className="mt-6 bg-gray-100 rounded-md h-24 flex items-center justify-center">
          {/* Additional content goes here */}
        </div>
        <div className="hover-content text-white font-serif">
          <span>{hover_descr}</span>
          <ChevronRight size={24} className="text-white" />
        </div>
      </div>
    </>
  );
};

export default CardComp;
