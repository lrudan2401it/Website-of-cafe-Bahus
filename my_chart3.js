const ctx = document.getElementById('myPool').getContext('2d');

const myChart3 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Srbi', 'Crnogorci', 'Mađari', 'ostali', 'reg. izjašnjeni / nisu se izjasnili / nepoznato'],
        datasets: [{
            label: 'Nacionalna struktura',
            data: [65.08, 13.2, 12.2, 8.2, 1.32],
            backgroundColor: [
                'rgba(0, 102, 204, 1)',
                'rgba(252, 151, 151, 1)',
                'rgba(255, 255, 51, 1)',
                'rgba(195, 195, 195, 1)',
                'rgba(127, 127, 127, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});