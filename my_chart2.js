const ctx = document.getElementById('myChart').getContext('2d');

const myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
        datasets: [{
            label: 'Oblačnost',
            data: [7.2, 6.4, 5.3, 7.3, 6.7, 5.4, 4.3, 3.0, 4.8, 3.7, 8.4, 8.5],
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