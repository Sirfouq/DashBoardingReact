import React, { useState, FC } from 'react';
import { User } from 'lucide-react';

interface BubbleMenuProps {
  userImage?: string; // Prop to pass user image URL
}

const BubbleMenu: FC<BubbleMenuProps> = ({ userImage }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className=" top-5 right-5 z-10">
      
      <button 
        onClick={toggleMenu} 
        className="flex items-center justify-center h-8 w-8 rounded-full  border-2 border-slate-700 shadow-lg bg-slate-400 focus:outline-none"
      >
        {userImage ? (
          <img src={userImage} alt="User" className="h-full w-full object-cover" />
        ) : (
          // If no image is provided, use User icon as placeholder
          <User size={20} className="text-gray-200" />
        )}
      </button>

      {/* Menu items */}
      {isMenuVisible && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BubbleMenu;
