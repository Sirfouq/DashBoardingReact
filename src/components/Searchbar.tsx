import React, { HTMLInputTypeAttribute, useState } from 'react'
import { SearchIcon } from 'lucide-react';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputTypeAttribute>) => {
        setSearchQuery(event.target.valueOf);
    }

    return (

        <div>

            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm mr-1">
                        <SearchIcon className="text-gray-500" size={20} />

                    </span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset bg-gray-50 hover:bg-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-2"
                    placeholder="Search anything"
                />

            </div>
        </div>
    )
}

export default Searchbar;