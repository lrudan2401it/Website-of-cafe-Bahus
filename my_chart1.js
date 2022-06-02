const earning = document.getElementById('earning').getContext('2d');

const myChart1 = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X', 'XI', 'XII'],
        datasets: [{
            label: 'Srednje mesečne temperature',
            data: [-3.5, 0.3, 5.1, 11.8, 16.2, 18.8, 20.9, 20.3, 16.6, 11.9, 6.8, 0.6],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});