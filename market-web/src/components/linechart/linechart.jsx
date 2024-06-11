import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export const ProductLineChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/product/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: new Date(item.crawl_time).toLocaleString()
        }));
        setChartData(formattedData);

        // 평균값 계산 함수
        const total = response.data.reduce((sum, item) => sum + item.coupon_price, 0);
        const average = total / response.data.length;
        setAveragePrice(average);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 450, margin: 10 }}>
      <div style={{ width: '80%' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: 'bold', marginBottom: 10}}>LineChart</h3>
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
            {/* 평균값 그래프 */}
            <ReferenceLine y={averagePrice} stroke="red" strokeDasharray="3 3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductLineChart;
