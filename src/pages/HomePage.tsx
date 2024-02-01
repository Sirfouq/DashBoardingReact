import React from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Coins, Home, Receipt, Settings, ShoppingCart, User, Users, Warehouse } from "lucide-react";
import Searchbar from '../components/Searchbar';
import CardComp from '../components/Card';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className='flex h-screen bg-gray-100 overflow-hidden'>
    
      

      {/* Main content area - takes up all remaining space */}
      <div className='flex-1 flex flex-col bg-white'> {/* Ensure the background color is consistent */}
        {/* Header with Search and User Menu */}
        <div className='flex justify-between items-center p-4 border-b-2 border-gray-300'>
          <Searchbar />
          <div className='space-x-4'>
            {/* Placeholder for User Menu */}
            {/* User avatar or icon */}
          </div>
        </div>
        
        {/* Main content */}
        <div className='flex-grow overflow-auto p-4'>
  
          <ul className='flex flex-col sm:flex-row flex-wrap -mx-2 justify-center sm:justify-start'>
            <li className='p-2 w-full sm:w-auto sm:basis-1/3'>
            <CardComp
              icon={<ShoppingCart color='#8484D6'/>}
              title="Αγορές"
              hover_descr='Αναζητήστε τις αγορές σας'

                 // Gradient end color
/>
            </li>
            <li className='p-2 w-full sm:w-auto sm:basis-1/3'>
            <CardComp
              icon={<Coins color='#8484D6'/>}
              title="Πωλήσεις"
              hover_descr='Διαχειριστείτε τις πωλήσεις σας'
                   // Gradient end color
/>
            </li>
            <li className='p-2 w-full sm:w-auto sm:basis-1/3'>
            <CardComp
              icon={<Receipt color='#8484D6'/>}
              title="Ταμείο"
              hover_descr='Ταμείο'
                 // Gradient end color
/>
            </li> 
            <li className='p-2 w-full sm:w-auto sm:basis-1/3'>
            <CardComp
              icon={<Users color='#8484D6'/>}
              title="Οντότητες"
              hover_descr='Διαχειριστείτε νέες ή υπάρχουσες οντότητες'
                  // Gradient end color
/>
            </li>
            <li className='p-2 w-full sm:w-auto sm:basis-1/3 '>
            <CardComp
              icon={<Warehouse color='#8484D6'/>}
              title="Αποθήκη"
              hover_descr='Αναζητήστε προιόντα και τιμοκαταλόγους'
                 // Gradient end color
/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
