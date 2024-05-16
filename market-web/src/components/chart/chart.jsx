import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'  // YAxis, Legend 필요할 시 추가

export const Chart = () => {

    const data = [
        {
            name: '2024.5.1',
            'Price' : 4490,
        },
        {
            name: '2024.5.2',
            'Price' : 3430,
        },
        {
            name: '2024.5.3',
            'Price' : 2490,
        },
        {
            name: '2024.5.4',
            'Price' : 3390,
        },
        {
            name: '2024.5.5',
            'Price' : 1230,
        },
        {
            name: '2024.5.6',
            'Price' : 5290,
        },
        {
            name: '2024.5.7',
            'Price' : 2390,
        },
        {
            name: '2024.5.8',
            'Price' : 4540,
        },
        {
            name: '2024.5.9',
            'Price' : 4235,
        },
        {
            name: '2024.5.10',
            'Price' : 4490,
        },
        {
            name: '2024.5.11',
            'Price' : 2910,
        },
        
    ]

    return (
        <div className='chart'>chart
            <h3 className='chartTitle'>Price Charts</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='black' />
                    
                    <Line type="natural" dataKey='Price' stroke="red" />
                    
                    <Tooltip />
                    <CartesianGrid stroke="gray" strokeDasharray="2 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}