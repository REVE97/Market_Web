import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const Chart = () => {

    const data = [
        {
            name: 'Jan',
            'Active User' : 4490,
        },
        {
            name: 'Feb',
            'Active User' : 3430,
        },
        {
            name: 'Mar',
            'Active User' : 2490,
        },
        {
            name: 'Apr',
            'Active User' : 3390,
        },
        {
            name: 'May',
            'Active User' : 1230,
        },
        {
            name: 'Jun',
            'Active User' : 5290,
        },
        {
            name: 'Jul',
            'Active User' : 2390,
        },
        {
            name: 'Aug',
            'Active User' : 4540,
        },
        {
            name: 'Sep',
            'Active User' : 4235,
        },
        {
            name: 'Oct',
            'Active User' : 4490,
        },
        {
            name: 'Dec',
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