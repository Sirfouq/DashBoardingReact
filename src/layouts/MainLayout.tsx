// MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Home, Settings, User } from "lucide-react";
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }:MainLayoutProps) => {
  return (
    <div className='flex h-screen bg-gray-100 overflow-hidden'>
      <Sidebar>
        <Link to="/">
          <SidebarItem icon={<Home size={20} />} text="Home" />
        </Link>
        <Link to="/profile">
          <SidebarItem icon={<User size={20} />} text="Profile" />
        </Link>
        <Link to="/settings">
          <SidebarItem icon={<Settings size={20} />} text="Settings"/>
        </Link>
        
      </Sidebar>
      <div className='flex-1'>
        {children} {/* Main content changes here */}
      </div>
    </div>
  );
}

export default MainLayout;
