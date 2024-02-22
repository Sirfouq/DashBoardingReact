import { Moon, Phone, Search, SearchCheck, Sun, User } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [isDarkModeOn,setDarkModeOn] = useState(false);
  return (
    <div className="absolute lg:relative top-0 left-0 w-full z-10 ">
    <nav className="bg-indigo-500 bg-opacity-60 text-white text-sm h-12 flex justify-between items-center px-4 backdrop-blur-sm">
      {/* Left side - Navigation links */}
      <div className="flex gap-4">
        {isDarkModeOn?
        (<Sun size={20}/>):
        (<Moon size={20}/>)}
      </div>
     
      {/* Right side - Icons and actions */}
      <div className="flex items-center gap-4">
      <div className="h-6 w-px bg-white bg-opacity-50">

      </div>
        {/* Phone icon, assuming you are using a similar icon library as lucide-react */}
        <a className="flex items-center gap-2 hover:text-blue-300 transition-colors">
          <Search size={20} />
        </a>

        {/* User account or login icon */}
        <a href="/login" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
          <User size={20} />
        </a>
      </div>
    </nav>
    </div>
      
  );
};

export default TopBar;
