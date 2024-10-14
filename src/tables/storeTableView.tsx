import React, { useState, useEffect } from 'react';
import { DataTable } from "./data-table"; // Adjust the import path as needed
import { 
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  useReactTable,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel 
} from '@tanstack/react-table';
import { StoreRequest } from '@/requests/api'; // Adjust the import path as needed
import { Input } from '@/components/ui/input';
import { DataTableProvider, useDataTable } from './data_table_context';



interface Product {
  title: string;
  description: string;
  price: number;
  stock: number;
}

const  StoreTableContent = ()=> {

const { table, setData } = useDataTable<Product>();

useEffect(() => {
  let ignore = false;
  const fetchStores = async () => {
    try {
      const response = await StoreRequest();
      if (!ignore) {
        const storesData = response.products.map((item: Product) => ({
          title: item.title,
          description: item.description,
          price: item.price,
          stock: item.stock,
        }));
        setData(storesData);
      }
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };

  fetchStores();
  return () => { ignore = true }
}, [setData]); // Add setData to the dependency array

  const input = (
    <Input
      placeholder="Search..."
      value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("title")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
  return(
    <div className="container mx-auto py-10 overflow-x-auto">
      <DataTable input={input} />
    </div>
  )
}

  const StoreTableView = ()=>{
    const columns: ColumnDef<Product>[] = [
      { accessorKey: 'title', header: 'Title' },
      { accessorKey: 'description', header: 'Description' },
      { accessorKey: 'price', header: 'Price' },
      { accessorKey: 'stock', header: 'Stock' },
      // Define more columns based on the properties of your Product type
    ];
  
  return (
    <DataTableProvider<Product> columns={columns}>
      <StoreTableContent />
    </DataTableProvider>
  );
}


export default StoreTableView;