"use client";
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}; // eslint-disable-line @typescript-eslint/no-empty-object-type


const columns: ColumnDef<Payment>[] = [

  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
      return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg",{
        "bg-red-400":row.getValue('status') === "Pending",
        "bg-orange-400":row.getValue('status') === "Processing",
        "bg-green-400":row.getValue('status') === "Completed",
        "bg-red-600":row.getValue('status') === "Failed",
      }
      )}>
        {row.getValue('status')}
      </div>
    }
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
  order: string;
  status: string;
  lastOrder:string;
  method:string;
}
 const data: Payment[] = [
  {
    order: "Order #001",
    status: "Completed",
    lastOrder: "2024-09-10",
    method: "Credit Card",
  },
  {
    order: "Order #002",
    status: "Pending",
    lastOrder: "2024-09-15",
    method: "PayPal",
  },
  {
    order: "Order #003",
    status: "Processing",
    lastOrder: "2024-09-12",
    method: "Bank Transfer",
  },
  {
    order: "Order #004",
    status: "Completed",
    lastOrder: "2024-09-14",
    method: "Debit Card",
  },
  {
    order: "Order #005",
    status: "Failed",
    lastOrder: "2024-09-16",
    method: "Google Pay",
  },
  {
    order: "Order #006",
    status: "Completed",
    lastOrder: "2024-09-13",
    method: "Apple Pay",
  },
  {
    order: "Order #007",
    status: "Processing",
    lastOrder: "2024-09-18",
    method: "Stripe",
  },
  {
    order: "Order #008",
    status: "Pending",
    lastOrder: "2024-09-20",
    method: "Cash on Delivery",
  },
  {
    order: "Order #009",
    status: "Completed",
    lastOrder: "2024-09-11",
    method: "Credit Card",
  },
  {
    order: "Order #010",
    status: "Failed",
    lastOrder: "2024-09-19",
    method: "PayPal",
  },
  {
    order: "Order #011",
    status: "Processing",
    lastOrder: "2024-09-17",
    method: "Bank Transfer",
  },
  {
    order: "Order #012",
    status: "Completed",
    lastOrder: "2024-09-09",
    method: "Google Pay",
  },
  {
    order: "Order #013",
    status: "Completed",
    lastOrder: "2024-09-08",
    method: "Apple Pay",
  },
  {
    order: "Order #014",
    status: "Pending",
    lastOrder: "2024-09-21",
    method: "Stripe",
  },
  {
    order: "Order #015",
    status: "Completed",
    lastOrder: "2024-09-07",
    method: "Credit Card",
  }
]

export default function Orderspage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders"/>
       <DataTable columns={columns} data={data} />
    </div>
  )
};



