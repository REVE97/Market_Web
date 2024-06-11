// LineChart 연동 데이터 형식
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


// BarChart 
// 적용할 json 파일 데이터 형식 
axios.get(`http://3.34.188.16:8080/api/prices/summary/${product_id}`)

[
    {
        "product_id":5,
        "crawl_time":"2024-06-08",
        "high_price": 358990,
        "low_price": 358990
    },
    {
        "product_id":5,
        "crawl_time":"2024-06-08",
        "high_price": 358990,
        "low_price": 358990
    }

]

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