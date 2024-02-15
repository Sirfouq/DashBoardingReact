// MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Coins, Contact, File, HelpCircle, Home, Settings, ShoppingBag, Store, User, Users } from "lucide-react";
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }:MainLayoutProps) => {
  return (
    <div className='flex h-screen bg-gray-100 overflow-hidden'>
      <Sidebar>
        <Link to="/" replace={true}>
          <SidebarItem icon={<Home size={20} />} text="Home" />
        </Link>
        <Link to="/profile">
          <SidebarItem icon={<User size={20} />} text="Profile" />
        </Link>
        <Link to="/settings">
          <SidebarItem icon={<Settings size={20} />} text="Settings"/>
        </Link>
        <Link to="/purchases" replace={true}>
          <SidebarItem icon={<ShoppingBag size={20} />} text="Purchases" />
        </Link>
        <Link to="/sales">
          <SidebarItem icon={<Coins size={20} />} text="Sales" />
        </Link>
        <Link to="/store">
          <SidebarItem icon={<Store size={20} />} text="Store"/>
        </Link>
        <Link to="/contacts" replace={true}>
          <SidebarItem icon={<Contact size={20} />} text="Contacts" />
        </Link>
        <Link to="/people">
          <SidebarItem icon={<Users size={20} />} text="People" />
        </Link>
        <Link to="/reports">
          <SidebarItem icon={<File size={20} />} text="Reports"/>
        </Link>
        <Link to="/helpers">
          <SidebarItem icon={<HelpCircle size={20} />} text="Helpers"/>
        </Link>
      </Sidebar>
      <div className='flex-1'>
        {children} {/* Main content changes here */}
      </div>
    </div>
  );
}

export default MainLayout;
