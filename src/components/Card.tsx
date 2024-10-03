import { useTheme } from '@/contexts/ThemeContext';
import { ChevronRight } from 'lucide-react';
import React from 'react';


interface CardProps {
  title: string;
  icon: React.ReactNode;
  hover_descr: string;
}

const CardComp = ({ title, icon, hover_descr }: CardProps) => {
  const { isDarkMode } = useTheme();
  const cardClass = isDarkMode ? 'card-hover-dark' : 'card-hover';
  const hoverContentClass = isDarkMode ? 'hover-content-dark' : 'hover-content';

  return (
    <div className={`rounded-lg shadow-md p-6 max-w-lg min-w-max ${cardClass} relative`}>
      <div className="flex justify-between items-center gap-4 mb-4">
        <div className="icon-container flex items-center justify-center">
          {icon}
        </div>
        <div className={`text-2xl font-mono font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</div>
      </div>
      <div className={`mt-6 rounded-md h-24 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
       
      </div>
      <div className={`${hoverContentClass} font-serif`}>
        <span>{hover_descr}</span>
        <ChevronRight size={24} className="text-white" />
      </div>
    </div>
  );
};

export default CardComp;