import React, { useState, useEffect } from 'react';
import { DataTable } from "./data-table";
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
import { get_companies } from '@/requests/api';
import { Input } from '@/components/ui/input';


function DataTableVIew() {
  // const [users, setUsers] = useState<Company[]>([]);
  const [users, setUsers] = useState<User[]>([]); // Initialize state to hold users
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
 // Initialize state to hold companies
  // Initialize state to hold your users

  useEffect(() => {
    let ignore = false;
    const fetchUsers = async () => {
      try {
        if(!ignore){
          const response = await get_companies();
          const usersData = response.users.map((item: User) => ({
            firstName: item.firstName,
            lastName: item.lastName,
            age: item.age,
            email: item.email
          }));
          setUsers(usersData); 
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }  
      };
  
    fetchUsers();
    return () => { ignore = true }
  }, []);  

 type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string; // Add the Address field
  // Include other fields as needed
};


  
  // Define columns based on the company data structure
  const columns: ColumnDef<User>[] = [
    
    {
      accessorKey: 'firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'age', // Make sure this matches the key you used when setting the data
      header: 'Age',
    },
    {
      accessorKey: 'email',
      header: 'Email',}
    // Add more columns as needed
  ];

  const table = useReactTable({
    data: users,
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
          placeholder="Αναζήτηση..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> 
   )
  

  return (
    <div className="container mx-auto py-10 overflow-x-auto"> {/* horizontal scroll for wide tables */}
    <DataTable columns={columns} data={users} table={table} input={input}  />
  </div>
  );
}

export default DataTableVIew;