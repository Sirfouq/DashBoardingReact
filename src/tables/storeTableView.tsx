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

function StoreTableView() {

  interface Product {
    title: string;
    description: string;
    price: number;
    stock: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  useEffect(() => {
    let ignore = false;
    const fetchStores = async () => {
      try {
        const response = await StoreRequest(); // Assuming ApiResponse includes a 'data' field that holds the stores data
        if (!ignore) {
          const storesData = response.products.map((item: Product) => ({
            title: item.title,
            description: item.description,
            price: item.price,
            stock: item.stock,
          }));
          setProducts(storesData);
        }
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
    return () => { ignore = true }
  }, []);

  const columns: ColumnDef<Product>[] = [
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'description', header: 'Description' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'stock', header: 'Stock' },
    // Define more columns based on the properties of your Product type
  ];

  const table = useReactTable({
    data: products,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

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

  return (
    <div className="container mx-auto py-10 overflow-x-auto">
      <DataTable columns={columns} data={products} table={table} input={input} />
    </div>
  );
}

export default StoreTableView;