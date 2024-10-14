import React, { useEffect } from 'react';
import { DataTable } from "./data-table";
import { useDataTable, DataTableProvider } from './data_table_context';
import { ColumnDef } from '@tanstack/react-table';
import { get_companies } from '@/requests/api';
import { Input } from '@/components/ui/input';

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

function DataTableContent() {
  const { table, setData } = useDataTable<User>();

  useEffect(() => {
    let ignore = false;
    const fetchUsers = async () => {
      try {
        if (!ignore) {
          const response = await get_companies();
          const usersData = response.users.map((item: User) => ({
            firstName: item.firstName,
            lastName: item.lastName,
            age: item.age,
            email: item.email
          }));
          setData(usersData);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        // Here you might want to set an error state or show an error message
      }
    };

    fetchUsers();
    return () => { ignore = true }
  }, [setData]);

  const input = (
    <Input
      placeholder="Αναζήτηση..."
      value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );

  return (
    <div className="container mx-auto py-10 overflow-x-auto">
      <DataTable input={input} />
    </div>
  );
}

function DataTableView() {
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
      accessorKey: 'age',
      header: 'Age',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    }
  ];

  return (
    <DataTableProvider columns={columns}>
      <DataTableContent />
    </DataTableProvider>
  );
}

export default DataTableView;