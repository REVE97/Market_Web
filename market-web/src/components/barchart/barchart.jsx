import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ProductBarChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [period, setPeriod] = useState(30);

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/summary/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: new Date(item.crawl_time).toLocaleDateString()
        }));
        setChartData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  useEffect(() => {
    if (chartData.length > 0) {
      const endDate = new Date(chartData[chartData.length - 1].crawl_time);
      const startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - period);

      const filtered = chartData.filter(item => {
        const itemDate = new Date(item.crawl_time);
        return itemDate >= startDate && itemDate <= endDate;
      });

      setFilteredData(filtered);
    }
  }, [chartData, period]);

  const buttonStyle = {
    padding: '10px 15px 10px 15px',
    margin: '5 5px',
    backgroundColor: 'gray',
    color: 'white',
    border: 'double',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '10px',
  };

  const buttonContainerStyle = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  const handleClick = (days) => {
    setPeriod(days);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>  
      <div style={{ width: '80%' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: 'bold', margin: 20 }}>
          BarChart
        </h3>
        <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => handleClick(6)}>7일</button>
        <button style={buttonStyle} onClick={() => handleClick(14)}>14일</button>
        <button style={buttonStyle} onClick={() => handleClick(29)}>30일</button>
      </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={filteredData}
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

