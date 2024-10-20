"use client";
import React from 'react'
import {BarChart as BarGraph,ResponsiveContainer,XAxis,YAxis,Bar} from "recharts";

type Props = {}

const data = [
    {
        name:"jan",
        total:Math.floor(Math.random()*5000)+1000,
    },
    {
        name:"feb",
        total:Math.floor(Math.random()*5000)+1000,
    },
    {
        name:"mar",
        total:Math.floor(Math.random()*5000)+1000,
    },
    {
        name:"aprl",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"may",
        total:Math.floor(Math.random()*5000)+1000,
    },
    {
        name:"jun",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"jul",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"aug",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"sep",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"oct",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"nov",
        total:Math.floor(Math.random()*5000)+1000,
    },{
        name:"dec",
        total:Math.floor(Math.random()*5000)+1000,
    },
]

export default function BarChart({}: Props) {

  return (
    <ResponsiveContainer width={'100%'} height={350}>
       <BarGraph data={data}>
        <XAxis dataKey={'name'}
        tickLine={false}
        axisLine={false}
        stroke='#888888'
        fontSize={12}
        />
        <YAxis
        
        tickLine={false}
        axisLine={false}
        stroke='#888888'
        fontSize={12}
        tickFormatter={(value)=>`$${value}`}
        />
        <Bar dataKey={'total'} radius={[4,4,0,0]}/>
        </BarGraph> 
    </ResponsiveContainer>
  )
}