const { jsPDF } = window.jspdf;

// Chart configuration
const pieOptions = {
    plugins: {
        datalabels: {
            formatter: (value, context) => {
                const data = context.chart.data.datasets[0].data;
                const total = data.reduce((sum, val) => sum + val, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            },
            color: '#fff',
            font: { weight: 'bold' }
        }
    }
};

async function generateNRMISReport(data) {
    const tempDiv = document.createElement('div');
    tempDiv.style.width = '595pt'; // A4 width
    tempDiv.style.padding = '20pt';
    tempDiv.style.background = '#fff'; // ensure clean white background
    tempDiv.innerHTML = generateReportHTML(data);
    document.body.appendChild(tempDiv);

    // Create charts
    createCharts(data.chartData);

    // Wait for charts to render
    await new Promise(resolve => setTimeout(resolve, 1000)); // render delay for charts

    // Initialize jsPDF
    const pdf = new jsPDF({
        unit: "pt",
        format: "a4",
        orientation: "portrait",
        compress: true,
        precision: 16,
        putOnlyUsedFonts: true
    });

    // Select all .page blocks
    const pages = tempDiv.querySelectorAll('.page');

    for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
            scale: 1.5,
            useCORS: true,
            allowTaint: true,
            scrollY: 0,
            logging: false,
            windowWidth: document.body.scrollWidth
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.98);
        const imgWidth = 595.28; // A4 width in pt
        const pageHeight = 841.89; // A4 height in pt
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    }

    // Save PDF and cleanup
    pdf.save("NR-Portfolio-Report.pdf");
    document.getElementById('blank').style.display = 'none';
    document.body.removeChild(tempDiv);
}

function createCharts(chartData) {
    // Reporting vs Not Reporting Pie Chart
    createPieChart('chart1', {
        labels: chartData.reportingPie.labels,
        datasets: [{
            data: chartData.reportingPie.data,
            backgroundColor: chartData.reportingPie.colors,
            borderWidth: 0
        }]
    });

    // IT Issues Pie Chart
    createPieChart('chart2', {
        labels: chartData.itPie.labels,
        datasets: [{
            data: chartData.itPie.data,
            backgroundColor: chartData.itPie.colors,
            borderWidth: 0
        }]
    });

    // NR Portfolio Pie Chart
    createPieChart('nrPortfolioChart', {
        labels: chartData.portfolioPie.labels,
        datasets: [{
            data: chartData.portfolioPie.data,
            backgroundColor: chartData.portfolioPie.colors,
            borderColor: '#fff',
            borderWidth: 2
        }]
    }, {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: 30 },
        plugins: {
            legend: { display: false },
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    return ((value / total) * 100).toFixed(1) + '%';
                },
                color: '#000',
                font: { size: 12, weight: 'bold' },
                anchor: 'end',
                align: 'start',
                offset: -28,
                backgroundColor: 'transparent',
                callout: {
                    display: true,
                    borderColor: '#999',
                    borderWidth: 1,
                    side: 'bottom',
                    length: 15
                }
            }
        }
    });

    // Bar Chart
    createBarChart('barChart', {
        labels: chartData.barChart.labels,
        datasets: [
            {
                label: chartData.barChart.datasets[0].label,
                data: chartData.barChart.datasets[0].data,
                backgroundColor: chartData.barChart.datasets[0].color
            },
            {
                label: chartData.barChart.datasets[1].label,
                data: chartData.barChart.datasets[1].data,
                backgroundColor: chartData.barChart.datasets[1].color
            }
        ]
    });
}

function createPieChart(id, data, customOptions = {}) {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    const options = { ...pieOptions, ...customOptions };
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
        plugins: [ChartDataLabels]
    });
}

function createBarChart(id, data) {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'NR Monthly Comparative Analysis' },
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    offset: -22,
                    color: '#44546a',
                    font: { size: 10, weight: 'bold' }
                }
            },
            scales: { y: { beginAtZero: true } }
        },
        plugins: [ChartDataLabels]
    });
}
function generateReportHTML(data) {
    return `
    <style>
        /* General Resets */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        /* Header */
        header,
        .pdf-header-clone  {
            top: 0;
            width: 100%;
            background-color: white;
            text-align: center;
            z-index: 1000;
            border-top: 1.5px solid #4472c4;
            border-bottom: 1.5px solid #4472c4;
            margin-bottom: 12px;
            background-color: white;
        }
.pdf-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-text {
  text-align: left;
}

.header-text h2,
.header-text p {
  margin: 0;
  padding: 0;
}

.header-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}
        #content {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
        }

        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
            border: 2px solid #ccc;
            page-break-inside: avoid;
            table-layout: fixed;
            word-wrap: break-word;
        }

        /* Prevent table rows from breaking across pages */
        table,
        thead,
        tbody,
        tr,
        th,
        td {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
        }

        table.display {
            width: 100% !important;
            table-layout: fixed;
            word-break: break-word;
        }

        /* Buttons */
        button {
            background-color: #005bac;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }

        button:hover {
            background-color: #2c4474;
        }

        /* Table header */
        .display thead {
            background-color: #086bc2;
            color: white;
        }

        .table-container {
            margin-top: 20px;
        }

        /* Layout */
        .sum-type {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 0.2rem;
            padding: 0 10px;
        }

        .left-tables {
            flex: 1;
            max-width: 800px;
            margin-left: 5px;
        }

        #summary table {
            background-color: #b1d2a2;
            text-align: center;
        }

        #summary table th,
        #summary table td {
            padding: 0.6rem;
            border: 1.5px solid #8fbf73;
        }

        .nr-type th,
        .nr-type td {
            padding: 0.7rem;
            text-align: center;
            border: 1.5px solid #a5a5a5;
        }

        /* Charts */
        .right-charts {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .chart-block {
            text-align: center;
        }

        .chart-block canvas {
            max-width: 200px;
            max-height: 200px;
            margin: auto;
        }

        /* Pie chart below */
        #charts {
           width: 70%;
           max-width: 250px;
           margin: 10px auto;
           text-align: center;
           margin-bottom: 2px;
        }

        #nrPortfolioChart {
           width: 250px !important;
           height: 250px !important;
           margin: auto;
        }

        /* Second Page */
        .second-page {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .second-page .col {
            flex: 1;
            min-width: 300px;
            margin-left: 5px;
            margin-right: 5px;
        }

        .col th,
        .col td {
            padding: 6px;
            border: 1.2px solid #a5a5a5;
        }

        .col-group {
            display: flex;
            top: 0;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .col {
            flex: 1;
            min-width: 300px;
        }

        .left-col table,
        .right-col table {
            width: 100%;
        }

        #barChart {
            width: 100% !important;
            max-width: 100% !important;
            height: 100%;
        }

        #Monthly-Comparative-Analysis th,
        #Monthly-Comparative-Analysis td {
            padding: 12px;
        }

        #NR-Portfolio-30-Days-Earlier,
        #NR-Portfolio-Today {
            background-color: #e7e7e7;
            border: none;
            table-layout: fixed;
            width: 90%;
        }

        #NR-Portfolio-30-Days-Earlier th,
        #NR-Portfolio-30-Days-Earlier td,
        #NR-Portfolio-Today th,
        #NR-Portfolio-Today td {
            border: 1px solid #ffffff;
            font-size: 0.75rem;
            padding: 8px;
            word-wrap: break-word;
        }

        #NR-Portfolio-Today,
        #NR-Portfolio-30-Days-Earlier {
            table-layout: fixed;
            width: 100%;
            margin-top:2.5rem;
        }

        #NR-Portfolio-Today th:nth-child(1),
        #NR-Portfolio-Today td:nth-child(1),
        #NR-Portfolio-30-Days-Earlier th:nth-child(1),
        #NR-Portfolio-30-Days-Earlier td:nth-child(1) {
            width: 10%;
        }

        #NR-Portfolio-Today th:nth-child(2),
        #NR-Portfolio-Today td:nth-child(2),
        #NR-Portfolio-30-Days-Earlier th:nth-child(2),
        #NR-Portfolio-30-Days-Earlier td:nth-child(2) {
            width: 70%;
        }

        #NR-Portfolio-Today th:nth-child(3),
        #NR-Portfolio-Today td:nth-child(3),
        #NR-Portfolio-30-Days-Earlier th:nth-child(3),
        #NR-Portfolio-30-Days-Earlier td:nth-child(3) {
            width: 20%;
            text-align: center;
        }

        .full-width-table {
            width: 90%;
            margin: 10px auto;
            margin-top:2.5rem;
            margin-bottom:8rem;
            text-align: left;
            padding: 5px;
            table-layout: fixed;
        }

        .full-width-table th,
        .full-width-table td {
            padding: 3px;
        }

        .full-width-table th:first-child,
        .full-width-table td:first-child {
            width: 40px;
            text-align: center;
        }

        .full-width-table th:last-child,
        .full-width-table td:last-child {
            width: 60px;
            text-align: center;
        }

        .display th, td {
            font-size: 12px;
            border: 0.5px solid #ffffff;
        }

        .display table {
            border: none;
        }

        .display th {
            background-color: #4472c4;
            color: white;
        }

        .display td:first-child {
            background-color: #4472c4;
            color: white;
        }

        .display tbody tr:nth-child(even) td:not(:first-child) {
            background-color: #cfd5ea;
        }

        .display tbody tr:nth-child(odd) td:not(:first-child) {
            background-color: #e9ebf5;
        }

        .page {
           width: 100%;
           page-break-inside: avoid;
           break-inside: avoid;
           padding-top: 1rem; 
}

.page-break {
  page-break-after: always;
  break-after: page;
  height: 0;
}
        .no-break {
            page-break-inside: avoid;
        }

        .print-tr {
            font-size: 10px;
        }

        .pdf-header-clone {
            display: block;
            // margin-top: 0.3rem;

        }

        .generate-pdf .pdf-header-clone {
            display: block;
            background: white;
            text-align: center;
            padding: 8px;
            margin-bottom: 2px;
        }
            .pdf-header-clone {
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  border-top: 1.5px solid #4472c4;
  border-bottom: 1.5px solid #4472c4;
  margin: 0.3rem 0 12px;
  padding: 6px;
}

.pdf-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-text {
  flex-grow: 1;
  text-align: center;
  padding:0;
}

.header-text h2,
.header-text p {
  margin: 0;
  padding: 0;
}

.header-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
  margin-left: auto;
  padding-right: 30px;
}

    </style>
    <div id="content">
        <!-- Page 1 -->
        <div class="page">
            <div class="pdf-header-clone">
  <div class="pdf-header-content">
    <div class="header-text">
      <h2>NOT REPORTING PORTFOLIO MIS</h2>
      <p>Client Name: JS Bank Limited</p>
      <p>Issue Date: 12 Dec, 2018</p>
    </div>
    <img src="itecknology-New-Logo.png.webp" class="header-logo" alt="Logo" />
  </div>
</div>

            <div class="sum-type">
                <div class="left-tables">
                    <div id="summary">
                        <table>
                            ${Object.entries(data.summary).map(([key, value]) => `
                                <tr>
                                    <th>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</th>
                                    <td>${value}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <div id="nr-types">
                        <table class="nr-type">
                            <thead>
                                <tr>
                                    <th>NR Portfolio Type</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.nrTypes.map((type, index) => `
                                    <tr>
                                        <td>${index + 1}. ${type.name}</td>
                                        <td><button>${type.quantity}</button></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="right-charts">
                    <div class="chart-block">
                        <h3>NOT REPORTING PORTFOLIO %</h3>
                        <canvas id="chart1"></canvas>
                    </div>
                    <div class="chart-block">
                        <h3>NOT REPORTING PORTFOLIO due to IT %</h3>
                        <canvas id="chart2"></canvas>
                    </div>
                </div>
            </div>

            <div id="charts">
                <h4>NR PORTFOLIO TYPE %</h4>
                <canvas id="nrPortfolioChart"></canvas>
            </div>
        </div>

        <div class="page-break"></div>

        <!-- Page 2 -->
        <div class="page second-page">
        <div class="pdf-header-clone">
  <div class="pdf-header-content">
    <div class="header-text">
      <h2>NOT REPORTING PORTFOLIO MIS</h2>
      <p>Client Name: JS Bank Limited</p>
      <p>Issue Date: 12 Dec, 2018</p>
    </div>
    <img src="itecknology-New-Logo.png.webp" class="header-logo" alt="Logo" />
  </div>
</div>
    <div class="col-group">
                <div class="col left-col">
                    <table id="Monthly-Comparative-Analysis">
                        <thead>
                            <tr>
                                <th colspan="3">Monthly Comparative Analysis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Category</td>
                                <td>30 Days Earlier</td>
                                <td>Today</td>
                            </tr>
                            <tr>
                                <td>Total Portfolio</td>
                                <td>${data.comparison.previousTotal}</td>
                                <td>${data.comparison.currentTotal}</td>
                            </tr>
                            <tr>
                                <td>NR Count</td>
                                <td>${data.comparison.previousNRCount}</td>
                                <td>${data.comparison.currentNRCount}</td>
                            </tr>
                            <tr>
                                <td>% of NR</td>
                                <td>${data.comparison.previousNRPercentage}%</td>
                                <td>${data.comparison.currentNRPercentage}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col right-col">
                    <canvas id="barChart"></canvas>
                </div>
            </div>

            <div class="col-group">
                <div class="col left-col">
                    <table id="NR-Portfolio-30-Days-Earlier">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NR Portfolio 30 Days Earlier</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.portfolioComparison.map((item, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${item.type}</td>
                                    <td>${item.earlier}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="col right-col">
                    <table id="NR-Portfolio-Today">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NR Portfolio Today</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.portfolioComparison.map((item, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${item.type}</td>
                                    <td>${item.today}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="full-width-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <h3>Performance in Each Category of NR Past 1 Month</h3>
                            </th>
                            <th>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.portfolioComparison.map((item, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${item.type}</td>
                                <td>${Math.round((item.today / data.summary.notReporting) * 100)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
       ${generateEntriesPages(data.entries)}
</div>`;
}


function generateEntriesPages(entries) {
    const groups = [
        { count: 30, title: "NOT REPORTING PORTFOLIO MIS" },
        { count: 2, title: "NOT REPORTING PORTFOLIO MIS" },
        { count: 28, title: "NOT REPORTING PORTFOLIO MIS" },
        { count: 40, title: "NOT REPORTING PORTFOLIO MIS" },
        { count: 7, title: "NOT REPORTING PORTFOLIO MIS" },
        { count: 1, title: "NOT REPORTING PORTFOLIO MIS" }
    ];

    let startIndex = 0;
    let pagesHTML = "";

    groups.forEach((group, i) => {
        const groupEntries = entries.slice(startIndex, startIndex + group.count);
        startIndex += group.count;

        pagesHTML += `
        <style>
        .pdf-header-clone {
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  border-top: 1.5px solid #4472c4;
  border-bottom: 1.5px solid #4472c4;
  margin: 0.3rem 0 12px;
  padding: 10px;
}

.pdf-header-content {
  display: flex;
  align-items: center;
  position: relative;
}

.header-text {
  flex-grow: 1;
  text-align: center;
}

.header-logo {
  height: 80px;
  width: auto;
  padding-right:30px;
  object-fit: contain;
  margin-left: auto; /* Push to the far right */
}
        </style>
        <div class="page-break"></div>
        <div class="page no-break">
         <div class="pdf-header-clone">
  <div class="pdf-header-content">
    <div class="header-text">
      <h2>NOT REPORTING PORTFOLIO MIS</h2>
      <p>Client Name: JS Bank Limited</p>
      <p>Issue Date: 12 Dec, 2018</p>
    </div>
    <img src="itecknology-New-Logo.png.webp" class="header-logo" alt="Logo" />
  </div>
</div>
   <div class="table-container">
                <table class="display">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Reg No.</th>
                            <th>Primary Name</th>
                            <th>Make</th>
                            <th>Engine No</th>
                            <th>Ch No.</th>
                            <th>Model</th>
                            <th>NR Date</th>
                            <th>Aging</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${groupEntries.map((entry, idx) => `
                            <tr>
                                <td>${idx + 1}</td>
                                <td>${entry.reg}</td>
                                <td>${entry.name}</td>
                                <td>${entry.make}</td>
                                <td>${entry.engine}</td>
                                <td>${entry.chassis}</td>
                                <td>${entry.model}</td>
                                <td>${entry.nrDate}</td>
                                <td>${entry.aging}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    <div class="page-break"></div>`;
    });

    return pagesHTML;
}


// Automatically generate the report when the page loads
window.addEventListener('DOMContentLoaded', () => {
    generateNRMISReport(reportData);
});