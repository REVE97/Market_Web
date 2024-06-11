import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ProductLineChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/product/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: new Date(item.crawl_time).toLocaleString()
        }));
        setChartData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  return (
    <div style={{ width: '60%', height: 450 , margin: 10 }}>
      <h3 style={{ textAlign: 'center' }}>LineChart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
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
          <Line type="monotone" dataKey="coupon_price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductLineChart;
