import React, { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';
import { MoreVertical } from 'lucide-react';

// Extend the shape of the context
interface SidebarContextProps {
    expanded: boolean;
    activeItem: string;
    updateActiveItem: (itemName: string) => void;
}

// Update the default context value accordingly
const SidebarContext = createContext<SidebarContextProps>({
    expanded: true,
    activeItem: 'Home',
    updateActiveItem: () => { }, // placeholder function
});

interface SidebarProps {
    children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
    const [expanded, setExpanded] = useState<boolean>(window.innerWidth > 768);
    const [activeItem, setActiveItem] = useState<string>('Home');

    const updateActiveItem = (itemName: string) => {
        setActiveItem(itemName);
    };

    useEffect(() => {
        const handleResize = () => setExpanded(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <aside className="h-screen max-w-lg">
            <nav className="h-full flex flex-col bg-indigo-50 border-r shadow-sm overflow-y-auto ">
                <SidebarContext.Provider value={{ expanded, activeItem, updateActiveItem }}>
                    <ul className="flex-1 px-3 mt-12">{children}</ul>
                </SidebarContext.Provider>
                {/* <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">George Red</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div> */}
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
            className={`relative flex items-center py-2 px-3 my-1 font-semibold rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-200 text-gray-600"
                }`}
            onClick={() => updateActiveItem(text)}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                {text}
            </span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
};

export default Sidebar;
