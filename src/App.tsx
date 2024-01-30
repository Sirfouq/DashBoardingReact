import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { Home, Settings, User } from "lucide-react"; // Import the icons you want to use
import Searchbar from './components/Searchbar';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// import { Profile } from './components/Greet';
// import {Content,BasicTextFields} from './components/Content';

// function App() {


// const App =()=> {
//   const [count,setCount] = useState(0);

//   const increment =() =>{
//     setCount(count+1);
//   }
    
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <h1 className="text-center mb-4">{count}</h1>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={increment}>
//           Click
//         </button>
//       </div>
//     </div>
//   );
  

// }
// export default App;




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/settings" element={<SettingsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
      
      
    
  );
}

export default App;



