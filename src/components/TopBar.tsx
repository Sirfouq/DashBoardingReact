import { ChevronDown, Moon, Phone, Search, SearchCheck, Sun, User } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [isMenuVisible,setIsMenuVisible] = useState(false);
  const [isDarkModeOn,setDarkModeOn] = useState(false);
  const [storeData, setStoreData] = useState(null); // State to store fetched data
  const sidebarWidth = "16rem"; 

  // const handleStoreRequest = async () => {
  //   try {
  //     const response = await StoreRequest();
  //     console.log("Store data:", response); // Assuming response is the data you need
  //     // Consider setting this data to a state or passing it to other components
  //   } catch (error) {
  //     console.error("Error fetching store data:", error);
  //     // Handle the error, maybe show a notification to the user
  //   }
  // };

  return (
    
    <div className="fixed top-0 left-0 right-0 z-10 "> {/* Inline style to offset the TopBar from the Sidebar */}
    <nav className="bg-indigo-500 bg-opacity-60 text-white text-sm h-12 flex justify-end items-center px-4 backdrop-blur-sm">
        
      
      <div className="flex items-center gap-4">
      {isDarkModeOn?
        (<Sun size={20}/>):
        (<Moon size={20}/>)}
      <div className="h-6 w-px bg-white bg-opacity-50">

      </div>
        {/* Phone icon, assuming you are using a similar icon library as lucide-react */}
        <a className="flex items-center gap-2 hover:text-blue-300 transition-colors">
          <Search size={20} />
        </a>

        {/* User account or login icon */}
        <a  className="flex items-center  hover:text-blue-300 transition-colors" onClick={()=>setIsMenuVisible(!isMenuVisible)} >
          <User size={20} />
          <ChevronDown size={10}/>
        </a>
      </div>
    </nav>


    {isMenuVisible && (
      <div className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    )}
    
    </div>
    
    

   
    
      
  );
};

export default TopBar;
