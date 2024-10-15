const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [3000, 4000, 5000, 2000, 7000, 3000, 4000, 6000, 3000, 5000, 2000, 4000],
            backgroundColor: '#4CAF50',
            borderColor: '#4CAF50',
            borderWidth: 1
        },
        {
            label: 'Expense',
            data: [2000, 3000, 4000, 1000, 5000, 2000, 3000, 4000, 2000, 3000, 1000, 3000],
            backgroundColor: '#FF5722',
            borderColor: '#FF5722',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `$${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});
