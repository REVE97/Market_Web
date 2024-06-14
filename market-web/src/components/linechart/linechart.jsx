import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export const ProductLineChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const [lowestPrice, setLowestPrice] = useState(0);

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/product/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: new Date(item.crawl_time).toLocaleString()
        }));
        setChartData(formattedData);

        // 가격 데이터 추출
        const prices = response.data.map(item => item.coupon_price);

        // 평균값 계산
        const total = prices.reduce((sum, price) => sum + price, 0);
        const average = total / prices.length;
        setAveragePrice(average);

        // 최고값 및 최저값 계산
        const highest = Math.max(...prices);
        const lowest = Math.min(...prices);
        setHighestPrice(highest);
        setLowestPrice(lowest);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 450, margin: 70 }}>
      <div style={{ width: '80%' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: 'bold', margin: 20}}>LineChart</h3>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <p style={{ color :'red', fontWeight: 'bold' }}>역대 최고값 : {highestPrice}원</p>
          <p style={{ color:'blue', fontWeight: 'bold' }}>역대 최저값 : {lowestPrice}원</p>
          <p style={{ color:'green', fontWeight: 'bold' }}>평균값 : {averagePrice.toFixed(0)}원</p>
        </div>
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

