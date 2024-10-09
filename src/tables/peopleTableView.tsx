import React, { useState, useEffect } from 'react';
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ColumnDef } from '@tanstack/react-table';
import { get_companies } from '@/requests/api';
import { Users } from 'lucide-react';

function DataTableVIew() {
  // const [users, setUsers] = useState<Company[]>([]);
  const [users, setUsers] = useState<User[]>([]); // Initialize state to hold companies
  // Initialize state to hold your users

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await get_companies();
        const usersData = response.users.map((item: User) => ({
          firstName: item.firstName,
          lastName: item.lastName,
          age: item.age,
          email: item.email
        }));
        setUsers(usersData); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
        
      }
  
    fetchUsers();
  }, []);  // Empty dependency array means this effect will only run once on mount
 // Empty dependency array means this effect will only run once on mount

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

  return (
    <div className="container mx-auto py-10 overflow-x-auto"> {/* horizontal scroll for wide tables */}
    <DataTable columns={columns} data={users} />
  </div>
  );
}

export default DataTableVIew;