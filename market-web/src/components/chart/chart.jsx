import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'  // YAxis, Legend 필요할 시 추가

export const Chart = () => {

    const data = [
        {
            name: '2024.5.1',
            'Active User' : 4490,
        },
        {
            name: '2024.5.2',
            'Active User' : 3430,
        },
        {
            name: '2024.5.3',
            'Active User' : 2490,
        },
        {
            name: '2024.5.4',
            'Active User' : 3390,
        },
        {
            name: '2024.5.5',
            'Active User' : 1230,
        },
        {
            name: '2024.5.6',
            'Active User' : 5290,
        },
        {
            name: '2024.5.7',
            'Active User' : 2390,
        },
        {
            name: '2024.5.8',
            'Active User' : 4540,
        },
        {
            name: '2024.5.9',
            'Active User' : 4235,
        },
        {
            name: '2024.5.10',
            'Active User' : 4490,
        },
        {
            name: '2024.5.11',
            'Active User' : 2910,
        },
        
    ]

    return (
        <div className='chart'>chart
            <h3 className='chartTitle'>Cost Charts</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='black' />
                    
                    <Line type="monotone" dataKey='Active User' />
                    
                    <Tooltip />
                    <CartesianGrid stroke="black" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}