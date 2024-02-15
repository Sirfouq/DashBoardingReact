import React, { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';
import { MoreVertical } from 'lucide-react';

// Extend the shape of the context
interface SidebarContextProps {
  expanded: boolean;
  activeItem: string;
  updateActiveItem: (itemName: string) => void;
}


const SidebarContext = createContext<SidebarContextProps>({
  expanded: true,
  activeItem: 'Home',
  updateActiveItem: () => {}, 
});

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(window.innerWidth > 768);
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showFooter, setShowFooter] = useState(window.innerWidth > 768);

  const updateActiveItem = (itemName: string) => {
    setActiveItem(itemName);
  };

  // Event handler to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth > 768);
      setShowFooter(window.innerWidth > 768); // Update the showFooter state based on window width
    };
    
    window.addEventListener('resize', handleResize);
    
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-indigo-50 border-r shadow-sm">
        <SidebarContext.Provider value={{ expanded, activeItem, updateActiveItem }}>
          <ul className="flex-1 px-3 py-4">{children}</ul>
        </SidebarContext.Provider>
        {showFooter&&(
        <div className="border-t flex flex-col p-3">
          {isMenuVisible && (
            <div style={{
              display: 'block',
              marginBottom: '10px',
              border: '1px solid #ddd',
              boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px',
            }}>
              {/* Menu items */}
              <div>Menu Item 1</div>
              <div>Menu Item 2</div>
              <div>Menu Item 3</div>
           
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="leading-4">
              <h4 className="font-semibold">George Red</h4>
              <span className="text-xs text-gray-600">gred@gmail.com</span>
            </div>
            <MoreVertical size={20} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
          </div>
        </div>
        )}
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  alert?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, text, alert }) => {
  const { expanded, activeItem, updateActiveItem } = useContext(SidebarContext);
  const isActive = activeItem === text;

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-200 text-gray-600"
      }`}
      onClick={() => updateActiveItem(text)}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
};

export default Sidebar;
