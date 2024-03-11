import React, { useState, useEffect } from 'react';
import { DataTable } from "./data-table"; // Adjust the import path as needed
import { ColumnDef } from '@tanstack/react-table';
import { StoreRequest } from '@/requests/api'; // Adjust the import path as needed

// Define the Store type directly inside the component if it's only used here
type Store = {
  ID: number;
  S_Type: number;
  S_Code: string;
  S_Descr: string;
  S_Barcode: string;
  S_Active: boolean;
  // Add more fields as needed from your Store data structure
};

function StoreTableView() {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await StoreRequest(); // Assuming ApiResponse includes a 'data' field that holds the stores data
        // Adjust the mapping based on your actual data structure
        const storesData = response.data.map((item: { Store: Store }) => item.Store);
        setStores(storesData);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const columns: ColumnDef<Store>[] = [
    { accessorKey: 'S_Code', header: 'Store Code' },
    { accessorKey: 'S_Descr', header: 'Description' },
    { accessorKey: 'S_Barcode', header: 'Barcode' },
    // Define more columns based on the properties of your Store type
  ];

  return (
    <div className="container mx-auto py-10 overflow-x-auto">
      <DataTable columns={columns} data={stores} />
    </div>
  );
}

export default StoreTableView;
