import React, { useContext, createContext, useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Table
} from "@tanstack/react-table"

interface DataTableContextProps<TData> {
  table: Table<TData>
  setData: React.Dispatch<React.SetStateAction<TData[]>>
}

const DataTableContext = createContext<DataTableContextProps<any> | undefined>(undefined);

export const useDataTable = <TData,>(): DataTableContextProps<TData> => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context as DataTableContextProps<TData>;
}

interface DataTableProviderProps<TData> {
  children: React.ReactNode;
  columns: ColumnDef<TData>[]
}

export const DataTableProvider = <TData,>({ children, columns }: DataTableProviderProps<TData>) => {
  const [data, setData] = useState<TData[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
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

  return (
    <DataTableContext.Provider value={{ table, setData }}>
      {children}
    </DataTableContext.Provider>
  )
}