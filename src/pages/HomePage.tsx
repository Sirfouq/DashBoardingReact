//import React from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { Home, Settings, User } from "lucide-react";
import Searchbar from '../components/Searchbar';
import CardComp from '../components/Card';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className='flex h-screen bg-gray-100 overflow-hidden' style={{width:"100%"} }>
            {/* Sidebar - full height */}

            {/* Assuming Sidebar is a full height component */}
            <Sidebar>
                <Link to="/">
                    <SidebarItem icon={<Home size={20} />} text="Home" />
                </Link>
                <Link to="/profile">
                    <SidebarItem icon={<User size={20} />} text="Profile" />
                </Link>
                <Link to="/settings">
                    <SidebarItem icon={<Settings size={20} />} text="Settings" />
                </Link>
                {/* ... other items */}
            </Sidebar>


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
                    {/* Content takes up all available space and adjusts to viewport changes */}
                    <ul className='flex flex-wrap -m-2'>
                        <li className='p-2 flex-auto basis-full sm:basis-1/2'>
                            <CardComp title={'Αγορές'} revenue={77}></CardComp>
                        </li>
                        <li className='p-2 flex-auto basis-full sm:basis-1/2'>
                            <CardComp title={'Πωλήσεις'} revenue={77}></CardComp>
                        </li>
                        {/* Additional content as needed */}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default HomePage;
