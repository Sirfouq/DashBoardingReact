import React, { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';
import { MoreVertical } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';


// Extend the shape of the context
interface SidebarContextProps {
    expanded: boolean;
    activeItem: string;
    updateActiveItem: (itemName: string) => void;
}

// Update the default context value accordingly
const SidebarContext = createContext<SidebarContextProps>({
    expanded: true,
    activeItem: location.pathname,
    updateActiveItem: () => { }, // placeholder function
});

interface SidebarProps {
    children: ReactNode;
}

const Sidebar = ({ children } : SidebarProps) => {
    const [expanded, setExpanded] = useState<boolean>(window.innerWidth > 768);
    const location = useLocation(); 
    const [activeItem, setActiveItem] = useState<string>(location.pathname); 
    const {isDarkMode} = useTheme();
    const [isMenuVisible,setisMenuVisible] = useState<boolean>(false);

    const updateActiveItem = (routename: string) => {
        setActiveItem(routename);
    };

    useEffect(() => {
        // Update active item based on the current location path
        setActiveItem(location.pathname);
    }, [location.pathname]); 

    useEffect(() => {
        const handleResize = () => setExpanded(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <SidebarContext.Provider value={{ expanded, activeItem, updateActiveItem }}>
        <aside className="h-screen overflow-y-auto">
          <nav className={`h-full flex flex-col ${isDarkMode?'bg-gray-900':'bg-indigo-50'} border-r shadow-sm`}>
            
              <ul className="flex-1 px-3 pt-4 pb-8 mt-8 ">{children}</ul>
            
          </nav>
        </aside>
      </SidebarContext.Provider>
    );

    };

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    alert?: boolean;
    route: string; 

}

export const SidebarItem = ({ icon, text, alert,route } :SidebarItemProps) => {
    const { expanded, activeItem, updateActiveItem } = useContext(SidebarContext);
    const isDarkMode = useTheme()
    const isActive = route === '/'
    ? location.pathname === route
    : location.pathname.startsWith(route);
  
    return (
      <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : `hover:bg-indigo-200 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'}`
      }`}
        onClick={() => updateActiveItem(route)}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "ml-3" : "w-0"}`}>
          {text}
        </span>
        {alert && <div className={`absolute right-2 w-2 h-2 z-20 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
        {!expanded && (
          <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {text}
          </div>
        )}
      </li>
    );
  };

export default Sidebar;
