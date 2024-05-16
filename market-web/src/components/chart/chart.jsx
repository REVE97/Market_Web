import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'  // YAxis, Legend 필요할 시 추가

export const Chart = ({ title, data, dataKey, grid }) => {

    return (
        <div className='chart'>chart
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='black' />
                    
                    <Line type="natural" dataKey={dataKey} stroke="red" />
                    
                    <Tooltip />
                    {grid &&<CartesianGrid stroke="gray" strokeDasharray="2 2" />}
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}