import React from 'react';
import CardComp from '../components/Card';
import { ShoppingCart, Coins, Receipt, Users, Warehouse } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const bg_color = isDarkMode? 'li-dark':'li-light';
  

  return (
    
      <div className= {`overflow-y-auto pb-20 md:pb-0 p-4 flex-grow ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <ul className='flex flex-col sm:flex-row flex-wrap -mx-2 justify-center sm:justify-start'>
        <li className={`p-2 w-full sm:w-auto sm:basis-1/3 ${bg_color}`}>
            <CardComp
              icon={<ShoppingCart color='#8484D6'/>}
              title="Αγορές"
              hover_descr='Αναζητήστε τις αγορές σας'
            />
          </li>
          <li className={`p-2 w-full sm:w-auto sm:basis-1/3 ${bg_color}`}>
          <CardComp
              icon={<Coins color='#8484D6'/>}
              title="Πωλήσεις"
              hover_descr='Διαχειριστείτε τις πωλήσεις σας'
            />
          </li>
          <li className={`p-2 w-full sm:w-auto sm:basis-1/3 ${bg_color}`}>
          <CardComp
              icon={<Receipt color='#8484D6'/>}
              title="Ταμείο"
              hover_descr='Ταμείο'
            />
          </li> 
          <li className={`p-2 w-full sm:w-auto sm:basis-1/3 ${bg_color}`}>
          <CardComp
              icon={<Users color='#8484D6'/>}
              title="Οντότητες"
              hover_descr='Διαχειριστείτε νέες ή υπάρχουσες οντότητες'
            />
          </li>
          <li className={`p-2 w-full sm:w-auto sm:basis-1/3 ${bg_color}`}>
          <CardComp
              icon={<Warehouse color='#8484D6'/>}
              title="Αποθήκη"
              hover_descr='Αναζητήστε προιόντα και τιμοκαταλόγους'
            />
          </li>
          
        </ul>
      </div>
  );
}

export default HomePage;
