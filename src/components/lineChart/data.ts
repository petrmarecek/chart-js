import {ChartOptions} from "chart.js";
const labels = ['01/2022', '02/2022', '03/2022', '04/2022', '05/2022', '06/2022', '07/2022']

export const data = {
    labels,
    datasets: [
        {
            label: '1 - 90th percentil',
            data: [null, null, null, null, 10000, 23000, 26000],
            borderColor: 'red',
            backgroundColor: 'red',
            fill: '+1',
            tension: 0.2,
        },
        {
            label: 'Forecast line',
            data: [8000, 26000, 8000, 5000, 10000, 20000, 22000],
            borderColor: 'blue',
            backgroundColor: 'blue',
            tension: 0.2,
        },
        {
            label: '2 - 90th percentil',
            data: [null, null, null, null, 10000, 17000, 18000],
            borderColor: 'red',
            backgroundColor: 'red',
            fill: '-1',
            tension: 0.2,
        },
    ]
};

export const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Month",
            },
            ticks: {
                callback: function(value, index) {
                    return labels[index];
                },
            }
        },
        y: {
            display: true,
            min: 0,
            max: 30000,
            title: {
                display: true,
                text: "Cost",
            },
            ticks: {
                stepSize: 5000
            }
        }
    }

};
