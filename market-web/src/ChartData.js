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
// axios.get(`http://3.34.188.16:8080/api/prices/summary/${product_id}`)

// [
//     {
//         "product_id":5,
//         "crawl_time":"2024-06-08",
//         "high_price": 358990,
//         "low_price": 358990
//     },
//     {
//         "product_id":5,
//         "crawl_time":"2024-06-08",
//         "high_price": 358990,
//         "low_price": 358990
//     }

// ]

// 인기검색어 axios
// 검색어를 서버로 보내기
axios.post('http://3.34.188.16:8080/api/keywords')
// 검색어를 서버로부터 전달 요청
axios.get('http://3.34.188.16:8080/api/keywords')
