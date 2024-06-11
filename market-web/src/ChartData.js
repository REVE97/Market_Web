// LineChart 데이터
export const userData = [
    { name: '2024.5.1', 'Price': 4490 },
    { name: '2024.5.2', 'Price': 3430 },
    { name: '2024.5.3', 'Price': 2490 },
    { name: '2024.5.4', 'Price': 3390 },
    { name: '2024.5.5', 'Price': 1230 },
    { name: '2024.5.6', 'Price': 5290 },
    { name: '2024.5.7', 'Price': 2390 },
    { name: '2024.5.8', 'Price': 4540 },
    { name: '2024.5.9', 'Price': 4235 },
    { name: '2024.05.10', 'Price': 1960 },
    { name: '2024.05.11', 'Price': 1378 },
    { name: '2024.05.12', 'Price': 1828 },
    { name: '2024.05.13', 'Price': 2061 },
    { name: '2024.05.14', 'Price': 1293 },
    { name: '2024.05.15', 'Price': 2037 },
    { name: '2024.05.16', 'Price': 2985 },
    { name: '2024.05.17', 'Price': 3574 },
    { name: '2024.05.18', 'Price': 3484 },
    { name: '2024.05.19', 'Price': 2949 },
    { name: '2024.05.20', 'Price': 3476 },
]

// 연동 데이터 형식
// axios.get(`http://3.34.188.16:8080/api/prices/product/${productId}`) 차트 데이터 API
// [
//     {
//         "product_id":2,
//         "id": 101,
//         "coupon_price": 150000,
//         "crawl_time":"2024-06-08T15:00:00"
//     },
//     {
//         "product_id":2,
//         "id": 102,
//         "coupon_price": 150000,
//         "crawl_time":"2024-06-08T21:00:00"
//     },
//     {
//         "product_id":2,
//         "id": 103,
//         "coupon_price": 150000,
//         "crawl_time":"2024-06-09T09:00:00"
//     }
// ]


// BarChart 데이터

// 적용할 json 파일 데이터 형식 
// export const parseData = [
//     {
//         date: "2024.3.1",
//         openClose: [1920000,1930000],
//         highLow: [1800000,2000000]
//     }
//     ...
// ]

// 임의 랜덤 차트
export const parseData = [
   
    ...Array.from({ length: 90 }, (_, i) => {
        const randomStart = Math.floor(Math.random() * 5000) + 150000;
        const randomEnd = randomStart + Math.floor(Math.random() * 20000) - 10000; 
        const highLowMin = Math.min(randomStart, randomEnd) - 2000;
        const highLowMax = Math.max(randomStart, randomEnd) + 2000;

        return {
            date: new Date(2024, 2, 2 + i).toISOString().split('T')[0].replace(/-/g, '.'),
            openClose: [randomStart, randomEnd],
            highLow: [highLowMin, highLowMax]
        };
    })

]