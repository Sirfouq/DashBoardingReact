// TopBar.tsx
import React from 'react';
import Searchbar from './Searchbar';
import BubbleMenu from './BubbleMenu';

const TopBar = () => {
  return (
    <div className='flex justify-between items-center w-full max-h-44 px-4 py-2 border-b-2 border-gray-300 bg-white'>
      <Searchbar />
      <BubbleMenu />
    </div>
  );
}

export default TopBar;
