import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";



const CardData: CardProps[] = [
  {
    label:"Total revenue",
    amount:"$45,345.98",
    discription:"+20.3% from last month",
    icon:DollarSign
  },
  {
    label:"Suscriptions",
    amount:"+2345",
    discription:"+190.43% from last month",
    icon:Users
  },
  {
    label:"Sales",
    amount:"+12,453",
    discription:"+19.38% from last month",
    icon:CreditCard
  },
  {
    label:"Active Now",
    amount:"+57",
    discription:"+201 since last hour",
    icon:Activity
  },
]

const userSalesData: SalesProps[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    saleAmount: "+$100.50",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    saleAmount: "+$250.00",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    saleAmount: "+$320.75",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    saleAmount: "+$150.25",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    saleAmount: "+$220.40",
  },
  {
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    saleAmount: "+$185.60",
  },
  {
    name: "Daniel Evans",
    email: "daniel.evans@example.com",
    saleAmount: "+$410.90",
  }
]

export default function Home() {
  return (
  <div className="flex flex-col gap-5 w-full">
    <PageTitle title="Dashboard"/>
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
      {CardData.map((d,i)=>
      <Card key={i} amount={d.amount} discription={d.discription} icon={d.icon} label={d.label}/>
      )}
    </section>
    <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
      <CardContent>
        <p className="p-4 font-semibold">Overview</p>
        <BarChart/>
      </CardContent>
      <CardContent className="flex justify-between gap-4">
        <section>
          <p>Recent ales</p>
          <p className="text-sm text-grey-400">You made 265 sales this month.</p>
        </section>
        {userSalesData.map((d,i)=>
        <SalesCard key={i} email={d.email} name={d.name} saleAmount={d.saleAmount}/>)}
        
      </CardContent>
    </section>
  </div>
  );
}
