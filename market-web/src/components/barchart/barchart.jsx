import React, { useEffect, useState } from 'react';
import './barchart.css';
import { BarChart as RechartsBarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, Cell } from 'recharts';

export const BarChart = ({ title, data, dataKey, grid }) => {
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('전체');

  useEffect(() => {
    if (data && data.length > 0) {
      const max = Math.max.apply(null, data.map((e) => e ? parseInt(e.highLow[0]) : 0));
      const min = Math.min.apply(null, data.map((e) => e ? parseInt(e.highLow[1]) : 0));
      setMaxPrice(max);
      setMinPrice(min);
    }
  }, [data]);

  // 차트 기간을 나누는 함수
  const filterData = () => {
    if (selectedPeriod === '전체') return data;
    const now = new Date(data[data.length - 1].date); // 마지막 날을 기준으로 설정
    const periodDays = selectedPeriod === '7일' ? 6 : 29;  // 기간 설정 +1
    return data.filter((entry) => {
      const entryDate = new Date(entry.date);
      const timeDiff = now - entryDate;
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      return dayDiff <= periodDays;
    });
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const filteredData = filterData();

  return (
    <div className='chart'>BarCharts
      <h3 className='chartTitle'>{title}</h3>
      
      {/* 차트 기간 버튼 기능 */}
      <div className='periodSelector'>
        <button onClick={() => handlePeriodChange('전체')}>전체</button>
        <button onClick={() => handlePeriodChange('7일')}>7일</button>
        <button onClick={() => handlePeriodChange('30일')}>30일</button>
      </div>
      
      <ResponsiveContainer width="100%" aspect={5 / 1}>
        <RechartsBarChart
          barGap={-440 / filteredData.length}
          data={filteredData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[minPrice - (maxPrice - minPrice) * 0.1, maxPrice + (maxPrice - minPrice) * 0.1]} />
          
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="2 2" />}
          
          <Bar dataKey="openClose" fill="#8884d8" barSize={800 / filteredData.length}>
            {filteredData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={Number(entry.openClose[0]) > Number(entry.openClose[1]) ? '#0048ff' : '#c20404'}
              />
            ))}
          </Bar>
          
          <Bar dataKey="highLow" fill="#8884d8" barSize={80 / filteredData.length}>
            {filteredData.map((entry, index) => (
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
