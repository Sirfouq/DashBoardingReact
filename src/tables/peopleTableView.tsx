import React, { useState, useEffect } from 'react';
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ColumnDef } from '@tanstack/react-table';
import { get_companies } from '@/requests/api';

function DataTableVIew() {
  // const [users, setUsers] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]); // Initialize state to hold companies
  // Initialize state to hold your users

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await get_companies();
        const companiesData = response.data.map((item: { 
          Companies: Company, 
          Companies_AddressBook: { Address: string } 
        }) => ({
          ...item.Companies, 
          Address: item.Companies_AddressBook.Address 
        }));
        setCompanies(companiesData); 
      } catch (error) {
        console.error('Error fetching companies:', error);
        
      }
    };
  
    fetchCompanies();
  }, []);  // Empty dependency array means this effect will only run once on mount
 // Empty dependency array means this effect will only run once on mount

 type Company = {
  C_Code: string;
  C_Title: string;
  VatNo: string;
  Address: string; // Add the Address field
  // Include other fields as needed
};
  
  // Define columns based on the company data structure
  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: 'C_Code', // Accessor matches the key from company data
      header: 'Company Code', // Column header
      // You can define other column properties as needed, like cell rendering, sorting, etc.
    },
    {
      accessorKey: 'C_Title',
      header: 'Company Title',
    },
    {
      accessorKey: 'VatNo',
      header: 'VAT Number',
    },
    {
      accessorKey: 'Address', // Make sure this matches the key you used when setting the data
      header: 'Address',
    },
    // Add more columns as needed
  ];

  return (
    <div className="container mx-auto py-10 overflow-x-auto"> {/* horizontal scroll for wide tables */}
    <DataTable columns={columns} data={companies} />
  </div>
  );
}

export default DataTableVIew;