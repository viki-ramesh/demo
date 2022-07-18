var menuButton = document.getElementById('mobile-menu-btn');
var sideBar = document.getElementById('sidebarList');

menuButton.addEventListener('click', function () {
    if (sideBar.style.display === "" || sideBar.style.display === "none") {
        sideBar.style.display = 'flex';
    }
    else {
        sideBar.style.display = 'none';
    }
});


var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');


let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(242, 169, 0, 0.5)");
gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)");


const labels = [
    "day 1",
    "day 2",
    "day 3",
    "day 4",
    "day 5",
    "day 6",
    "day 7",

]

const data = {
    labels,
    datasets: [{
        data: [
            5, 4, 6, 4, 5, 8, 9

        ],
        label: [],
        fill: true,
        backgroundColor: gradient,
        borderColor: "#f2a900",
        borderWidth: 1.8,
        tension: 0.3,
        spanGaps:false,
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsiveAnimationDuration: 0,
        resizeDelay:0,
        animations: {
            x: false,
            
            
        },
        animation: {
            duration: 0,
        },
       

        transitions: {
            active: {
                animation: {
                    duration: 0
                }
            },
            resize: {
                animation: {
                    duration: 0
                }
            }
        },



        plugins: {
            legend: {
                display: false,
            },

            tooltip: {
                enabled: false,
            }
        },
        radius: 0,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },

    },
};

const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx2, config);
const myChart3 = new Chart(ctx3, config);

