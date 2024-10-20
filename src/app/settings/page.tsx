"use client";
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
// import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}; // eslint-disable-line @typescript-eslint/no-empty-object-type


 const columns: ColumnDef<Settings>[] = [

  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]
 interface Settings{
  category:string;
  value:string| number|boolean;
}
 const data: Settings[] = [
  {
    category:"Account",
    value:true
  },
  {
    category:"Notifications",
    value:false
  },
  {
    category:"Language",
    value:"English"
  },
  {
    category:"Theme",
    value:"Dark"
  },
]


export default function Settingspage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings"/>
       <DataTable columns={columns} data={data} />
    </div>
  )
};



