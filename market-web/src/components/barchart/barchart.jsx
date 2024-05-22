import React, { useEffect, useState } from 'react';
import './barchart.css';
import { BarChart as RechartsBarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, Cell } from 'recharts';

export const BarChart = ({ title, data, dataKey, grid }) => {
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [dataNum, setDataNum] = useState(0);

  useEffect(() => {
    if ( data && data.length > 0) {
      const max = Math.max.apply(null, data.map((e) => e ? parseInt(e.highLow[0]) : 0));
      const min = Math.min.apply(null, data.map((e) => e ? parseInt(e.highLow[1]) : 0));
      setMaxPrice(max);
      setMinPrice(min);
      setDataNum(data.length);
    }
  }, [data]);

  return (
    <div className='chart'>BarCharts
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <RechartsBarChart
          barGap={-440 / dataNum}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[minPrice - (maxPrice - minPrice) * 0.1, maxPrice + (maxPrice - minPrice) * 0.1]} />
          
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="2 2" />}
          
          <Bar dataKey="openClose" fill="#8884d8" barSize={800 / dataNum}>
            {data && data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={Number(entry.openClose[0]) > Number(entry.openClose[1]) ? '#0048ff' : '#c20404'}
              />
            ))}
          </Bar>
          
          <Bar dataKey="highLow" fill="#8884d8" barSize={80 / dataNum}>
            {data && data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={Number(entry.openClose[0]) > Number(entry.openClose[1]) ? '#0048ff' : '#c20404'}
              />
            ))}
          </Bar>
        
        </RechartsBarChart>
      
      </ResponsiveContainer>
    </div>
  );
};
