// RevenueCard.tsx
import React from 'react';

interface CardProps {
    title: string
    revenue: number;
}

const CardComp = ({ title, revenue }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full hover:bg-gray-500">
            <div className="flex justify-between items-center mb-4">

                <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    {/* Icon can be replaced with an SVG or another icon font */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className="text-3xl font-bold text-gray-800">{title}</div>
            {/* Placeholder for the bar chart */}
            <div className="mt-6 bg-gray-100 rounded-md h-24 flex items-center justify-center">

            </div>
        </div>
    );
};

export default CardComp;
