const reportData = {
    clientName: "JS Bank Limited",
    issueDate: "12 Dec, 2018",
    summary: {
        reporting: 2061,
        notReporting: 115,
        totalPortfolio: 2176
    },
    nrTypes: [
        { name: "NO CONTACT / NON-COOPERATIVE", quantity: 30 },
        { name: "LOW GSM/NON GSM AREA", quantity: 2 },
        { name: "PARKED FOR PROLONGED PERIOD", quantity: 28 },
        { name: "SCHEDULED FOR REDO", quantity: 40 },
        { name: "TOTAL LOSS / UNDER REPAIR", quantity: 7 },
        { name: "THIRD PARTY SOLD", quantity: 1 }
    ],
    comparison: {
        previousTotal: 2076,
        currentTotal: 2176,
        previousNRCount: 123,
        currentNRCount: 115,
        previousNRPercentage: 5.9,
        currentNRPercentage: 5.3
    },
    entries: [
        // Sample data - replace with your actual entries
        {
            sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 2, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 3, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 4, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 2, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
         {
            sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 2, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 3, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 4, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        },
        {
            sno: 2, reg: "BNP 101", name: "Ali", make: "Honda Civic",
            engine: "Q100001", chassis: "ZRE1000001", model: "2018",
            nrDate: "02/12/2018", aging: "26"
        }
        // Add all your entries here...
    ],
    portfolioComparison: [
        { type: "NO CONTACT / NON-COOPERATIVE", earlier: 30, today: 30 },
        { type: "LOW GSM/NON GSM AREA", earlier: 2, today: 2 },
        { type: "PARKED FOR PROLONGED PERIOD", earlier: 28, today: 28 },
        { type: "SCHEDULED FOR REDO", earlier: 47, today: 47 },
        { type: "TOTAL LOSS/UNDER REPAIR", earlier: 7, today: 7 },
        { type: "THIRD PARTY SOLD", earlier: 1, today: 1 }
    ],
    chartData: {
        reportingPie: {
            labels: ['Reporting', 'Not Reporting'],
            data: [2061, 115],
            colors: ['#5087bb', '#95b7df']
        },
        itPie: {
            labels: ['IT Issues', 'Other Issues'],
            data: [3224, 159082],
            colors: ['#3c66b1', '#a3a3a3']
        },
        portfolioPie: {
            labels: [
                'NO CONTACT / NON-COOPERATIVE',
                'LOW GSM/NON GSM AREA',
                'SCHEDULED FOR REDO',
                'TOTAL LOSS / UNDER REPAIR',
                'THIRD PARTY SOLD'
            ],
            data: [35, 2, 54, 8, 1],
            colors: ['#ed7d31', '#ffc000', '#70ad47', '#9e480e', '#997300']
        },
        barChart: {
            labels: ['30 Days Earlier', 'Today'],
            datasets: [
                {
                    label: 'Total Portfolio',
                    data: [2076, 2176],
                    color: '#3a6cc6'
                },
                {
                    label: 'NR Count',
                    data: [123, 115],
                    color: '#ee7420'
                }
            ]
        }
    }
};