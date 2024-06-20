import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ProductBarChart = ({ productId }) => {
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDay, setSelectedDay] = useState('전체');

  useEffect(() => {
    axios.get(`http://3.34.188.16:8080/api/prices/summary/${productId}`)
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          crawl_time: item.crawl_time.replace(/\./g, '-')
        }));
        setChartData(formattedData);
        setFilteredData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [productId]);

  // 요일별 차트 함수
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[date.getUTCDay()];
  };

  const filterDataByDay = (day) => {
    setSelectedDay(day);
    if (day === '전체') {
      setFilteredData(chartData);
    } else {
      const filtered = chartData.filter(item => getDayOfWeek(item.crawl_time) === day);
      setFilteredData(filtered);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>  
      <div style={{ width: '80%' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: 'bold', margin: 20 }}>
          요일별 가격 차트
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          {['전체', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'].map(day => (
            
            // 요일별 차트 버튼
            <button
              key={day}
              onClick={() => filterDataByDay(day)}
              style={{
                margin: '0 5px',
                padding: '10px 15px',
                backgroundColor: selectedDay === day ? '#007bff' : '#f0f0f0',
                color: selectedDay === day ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {day}
            </button>
          ))}
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


