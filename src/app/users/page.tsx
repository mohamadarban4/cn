"use client";
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}; // eslint-disable-line @typescript-eslint/no-empty-object-type


const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell:({row})=>{
      return <div className='flex gap-2 items-center'> 
      <img className='h-10 w-10' src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-img" />
      <p>{row.getValue("name")}</p>
      </div>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "LastOrder",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]

type Payment = {
  name: string;
  email: string;
  lastOrder:string;
  method:string;
}

 const data: Payment[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    lastOrder: "2024-09-10",
    method: "Credit Card",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    lastOrder: "2024-09-15",
    method: "PayPal",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    lastOrder: "2024-09-12",
    method: "Bank Transfer",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    lastOrder: "2024-09-14",
    method: "Debit Card",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    lastOrder: "2024-09-16",
    method: "Google Pay",
  },
  {
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    lastOrder: "2024-09-13",
    method: "Apple Pay",
  },
  {
    name: "Daniel Evans",
    email: "daniel.evans@example.com",
    lastOrder: "2024-09-18",
    method: "Stripe",
  },
  {
    name: "Olivia Turner",
    email: "olivia.turner@example.com",
    lastOrder: "2024-09-20",
    method: "Cash on Delivery",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
    lastOrder: "2024-09-11",
    method: "Credit Card",
  },
  {
    name: "Isabella Davis",
    email: "isabella.davis@example.com",
    lastOrder: "2024-09-19",
    method: "PayPal",
  },
  {
    name: "Ethan Harris",
    email: "ethan.harris@example.com",
    lastOrder: "2024-09-17",
    method: "Bank Transfer",
  },
  {
    name: "Mia Robinson",
    email: "mia.robinson@example.com",
    lastOrder: "2024-09-09",
    method: "Google Pay",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
    lastOrder: "2024-09-08",
    method: "Apple Pay",
  },
  {
    name: "Ava Thomas",
    email: "ava.thomas@example.com",
    lastOrder: "2024-09-21",
    method: "Stripe",
  },
  {
    name: "James Garcia",
    email: "james.garcia@example.com",
    lastOrder: "2024-09-07",
    method: "Credit Card",
  }
]

export default function Userspage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users"/>
       <DataTable columns={columns} data={data} />
    </div>
  )
};



