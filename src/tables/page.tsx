import React, { useState, useEffect } from 'react';
import { columns, User } from "./columns";
import { DataTable } from "./data-table";

function DemoPage() {
  const [users, setUsers] = useState<User[]>([]); // Initialize state to hold your users

  useEffect(() => {
    // Define an async function inside the effect to fetch user data
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/users'); // Fetch data from the API
      const json = await response.json(); // Parse JSON response body
      setUsers(json.users); // Update state with the users
    };

    fetchUsers().catch(console.error); // Call the function and catch any errors
  }, []); // Empty dependency array means this effect will only run once on mount

  return (
    <div className="container mx-auto py-10 overflow-x-auto"> {/* horizontal scroll for wide tables */}
    <DataTable columns={columns} data={users} />
  </div>
  );
}

export default DemoPage;