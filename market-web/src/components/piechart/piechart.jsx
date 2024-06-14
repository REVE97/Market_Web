import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 1;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 3} y={ey} textAnchor={textAnchor} fill="#333">{`횟수 : ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 1} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

// 데이터 그룹화 및 정렬 함수
const groupDataByCouponPrice = (data) => {
  const groupedData = data.reduce((acc, item) => {
    const price = item.coupon_price;
    if (!acc[price]) {
      acc[price] = { name: `가격 : ${price}원`, value: 0 };
    }
    acc[price].value += 1;
    return acc;
  }, {});

  // 객체를 배열로 변환하고 value 기준으로 정렬
  return Object.values(groupedData).sort((a, b) => a.value - b.value);
};

export const PieChartWithGroupedData = ({ productId }) => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://3.34.188.16:8080/api/prices/product/${productId}`);
        const groupedData = groupDataByCouponPrice(result.data);
        setData(groupedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#8DD1E1', '#82CA9D', '#A4DE6C', '#D0ED57', '#FFC658'];

  return (
    <div style={{ width: '100%', height: '500px', maxWidth: '700px' }}>
      <PieChart width={400} height={400} >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartWithGroupedData;
