// LineChart 데이터
export const userData = [
    {
        name: '2024.5.1',
        'Price' : 4490,
    },
    {
        name: '2024.5.2',
        'Price' : 3430,
    },
    {
        name: '2024.5.3',
        'Price' : 2490,
    },
    {
        name: '2024.5.4',
        'Price' : 3390,
    },
    {
        name: '2024.5.5',
        'Price' : 1230,
    },
    {
        name: '2024.5.6',
        'Price' : 5290,
    },
    {
        name: '2024.5.7',
        'Price' : 2390,
    },
    {
        name: '2024.5.8',
        'Price' : 4540,
    },
    {
        name: '2024.5.9',
        'Price' : 4235,
    },
    {
        name: '2024.5.10',
        'Price' : 4490,
    },
    {
        name: '2024.5.11',
        'Price' : 2910,
    }
]

// BarChart 데이터
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

];