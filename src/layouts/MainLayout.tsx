// MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Coins, Contact, File, HelpCircle, Home, Settings, ShoppingBag, Store, User, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import { useTheme } from '@/contexts/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}


const MainLayout = ({ children }:MainLayoutProps) => {
  const bottomBarHeight = 'h-64'; // The height of your BottomBar
  const {isDarkMode} = useTheme();

  return (
    <>
     <div className='flex h-screen bg-gray-100 overflow-hidden'> {/* Ensure the entire layout is within the viewport height and prevent overflow */}
      <Sidebar>
        <Link to="/" >
          <SidebarItem icon={<Home size={20} />} text="Αρχική" route='/' />
        </Link>
        <Link to="/profile">
          <SidebarItem icon={<User size={20} />} text="Προφίλ" route='/profile' />
        </Link>
        <Link to="/settings">
          <SidebarItem icon={<Settings size={20} />} text="Ρυθμίσεις" route='/settings'/>
        </Link>
        <Link to="/purchases" replace={true}>
          <SidebarItem icon={<ShoppingBag size={20} />} text="Αγορές" route='/purchases' />
        </Link>
        <Link to="/sales">
          <SidebarItem icon={<Coins size={20} />} text="Πωλήσεις" route='/sales' />
        </Link>
        <Link to="/store">
          <SidebarItem icon={<Store size={20} />} text="Αποθήκη" route='/store'/>
        </Link>
        <Link to="/contacts" replace={true}>
          <SidebarItem icon={<Contact size={20} />} text="Επαφές" route='/contacts' />
        </Link>
        <Link to="/people">
          <SidebarItem icon={<Users size={20} />} text="Πρόσωπα" route='/people' />
        </Link>
        <Link to="/reports">
          <SidebarItem icon={<File size={20} />} text="Αναφορές" route='/reports'/>
        </Link>
        <Link to="/helpers">
          <SidebarItem icon={<HelpCircle size={20} />} text="Βοηθητικά" route='/helpers'/>
        </Link>
      </Sidebar>
      
       
      <TopBar />         
          <main className={`flex-1 overflow-auto pb-4 pt-12 mb-8 ${isDarkMode ? 'bg-black':'bg-white'}`}> 
            {children}
          </main>
          
      <BottomBar />
  

          
          
       
      </div>
     
     </>
  );
}

export default MainLayout;
