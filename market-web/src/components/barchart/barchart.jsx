import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ProductBarChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/summary/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: item.crawl_time.replace(/\./g, '-')
        }));
        setChartData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>  
      <div style={{ width: '80%' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: 'bold', margin: 20 }}>
          BarChart
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="crawl_time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="high_price" fill="#CC3333" />
            <Bar dataKey="low_price" fill="#6699FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductBarChart;