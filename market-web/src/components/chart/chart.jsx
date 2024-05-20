import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer,ReferenceLine } from 'recharts'  // YAxis, Legend 필요할 시 추가

export const Chart = ({ title, data, dataKey, grid }) => {

    // 평균값 그래프 추가
    const calculateAverage = (data, dataKey) => {
        
        const total = data.reduce((sum, item) => sum + item[dataKey],0);
        return total / data.length;
    };
    const average = calculateAverage(data, dataKey);

    return (
        <div className='chart'>charts
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    
                    <XAxis dataKey="name" stroke='black' />
                    
                    <Line type="natural" dataKey={dataKey} stroke="red" />
                    
                    <Tooltip />
                    {grid &&<CartesianGrid stroke="gray" strokeDasharray="2 2" />}

                    {/* 평균값 그래프 */}
                    <ReferenceLine y={average} stroke="blue" strokeDasharray="3 3" />   
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}