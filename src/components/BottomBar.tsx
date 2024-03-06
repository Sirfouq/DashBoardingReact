// BottomBar.tsx
import React from 'react';

const BottomBar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-100 text-slate-500 p-3 shadow-md h-12 text-sm z-10 max-h-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className='truncate'>Dynasoft IKE</span>
        <span className='truncate'>Result Business C.R.M. - E.R.P. SaaS</span>
      </div>
    </div>
  );
};

export default BottomBar;
