// MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Coins, Contact, File, HelpCircle, Home, Settings, ShoppingBag, Store, User, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';

interface MainLayoutProps {
  children: ReactNode;
}


const MainLayout = ({ children }:MainLayoutProps) => {
  const bottomBarHeight = 'h-64'; // The height of your BottomBar

  return (
    <>
     <div className='flex h-screen bg-gray-100 overflow-hidden'> {/* Ensure the entire layout is within the viewport height and prevent overflow */}
      <Sidebar>
        <Link to="/" replace={true}>
          <SidebarItem icon={<Home size={18} />} text="Home" />
        </Link>
        <Link to="/profile">
          <SidebarItem icon={<User size={18} />} text="Profile" />
        </Link>
        <Link to="/settings">
          <SidebarItem icon={<Settings size={18} />} text="Settings"/>
        </Link>
        <Link to="/purchases" replace={true}>
          <SidebarItem icon={<ShoppingBag size={18} />} text="Purchases" />
        </Link>
        <Link to="/sales">
          <SidebarItem icon={<Coins size={18} />} text="Sales" />
        </Link>
        <Link to="/store">
          <SidebarItem icon={<Store size={18} />} text="Store"/>
        </Link>
        <Link to="/contacts" replace={true}>
          <SidebarItem icon={<Contact size={18} />} text="Contacts" />
        </Link>
        <Link to="/tables">
          <SidebarItem icon={<Users size={18} />} text="People" />
        </Link>
        <Link to="/reports">
          <SidebarItem icon={<File size={18} />} text="Reports"/>
        </Link>
        <Link to="/helpers">
          <SidebarItem icon={<HelpCircle size={18} />} text="Helpers"/>
        </Link>
      </Sidebar>
      
      
       {/* <div className='flex flex-col flex-1 backdrop-filter backdrop-blur-sm'> */}
        {/* <TopBar />  */}
        
          
          <main className='flex-1 overflow-auto pb-4 mb-8 bg-white'> {/* Padding-bottom added here */}
            {children}
          </main>
          
          <BottomBar />
  

          
          
       
      </div>
    {/* </div> */}
     
     </>
  );
}

export default MainLayout;
