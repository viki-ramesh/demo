// var menuButton = document.getElementById('mobile-menu-btn');
// var sideBar = document.getElementById('sidebarList');

// menuButton.addEventListener('click', ShowSidebar);

// // show sidebar
// function ShowSidebar(){
//     if (sideBar.style.display === "" || sideBar.style.display === "none") {
//         sideBar.style.display = 'flex';
//     }
//     else {
//         sideBar.style.display = 'none';
//     }
// }

// // Chart Section 

// ///  Calling API and modeling data for each chart ///
// const btcData = async () => {
//     const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=598130369a0d3aa1e54daa58ab23090db93f6364af8af622611f430a8b5a9584');
//     const json = await response.json();
//     const data = json.Data.Data
//     const times = data.map(obj => obj.time)
//     const prices = data.map(obj => obj.high)
//     return {
//         times,
//         prices
//     }
// }

// const ethereumData = async () => {
//     const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
//     const json = await response.json();
//     const data = json.Data.Data
//     const times = data.map(obj => obj.time)
//     const prices = data.map(obj => obj.high)
//     return {
//         times,
//         prices
//     }
// }


// const bnbData = async () => {
//     const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=598130369a0d3aa1e54daa58ab23090db93f6364af8af622611f430a8b5a9584');
//     const json = await response.json();
//     const data = json.Data.Data
//     const times = data.map(obj => obj.time)
//     const prices = data.map(obj => obj.high)
//     return {
//         times,
//         prices
//     }
// }


// /// Error handling ///
// function checkStatus(response) {
//     if (response.ok) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

// /// Charts ///
// let createBtcChart
// let createethereumChart
// let createBnbChart


// async function printBtcChart() {
//     let { times, prices } = await btcData()

//     let btcChart = document.getElementById('btcChart').getContext('2d');

//     let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

//     gradient.addColorStop(0, 'rgba(247,147,26,.5)');
//     gradient.addColorStop(.425, 'rgba(255,193,119,0)');



//     createBtcChart = new Chart(btcChart, {
//         type: 'line',
//         data: {
//             labels: times,
//             datasets: [{
//                 label: '$',
//                 data: prices,
//                 backgroundColor: gradient,
//                 borderColor: 'rgba(247,147,26,1)',
//                 borderJoinStyle: 'round',
//                 borderCapStyle: 'round',
//                 borderWidth: 3,
//                 pointRadius: 0,
//                 pointHitRadius: 10,
//                 lineTension: .2,
//             }]
//         },

//         options: {


//             title: {
//                 display: false,
//                 text: 'Heckin Chart!',
//                 fontSize: 35
//             },

//             legend: {
//                 display: false
//             },

//             layout: {
//                 padding: {
//                     left: 0,
//                     right: 0,
//                     top: 0,
//                     bottom: 0,
//                 }
//             },

//             scales: {
//                 xAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }],
//                 yAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }]
//             },

//             tooltips: {
//                 callbacks: {
//                     //This removes the tooltip title
//                     title: function () { }
//                 },
//                 //this removes legend color
//                 displayColors: false,
//                 yPadding: 10,
//                 xPadding: 10,
//                 position: 'nearest',
//                 caretSize: 10,
//                 backgroundColor: 'rgba(255,255,255,.9)',
//                 bodyFontSize: 15,
//                 bodyFontColor: '#303030'
//             }
//         }
//     });
// }

// async function printEthereumChart() {
//     let { times, prices } = await ethereumData()

//     let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

//     let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

//     gradient.addColorStop(0, 'rgba(78,56,216,.5)');
//     gradient.addColorStop(.425, 'rgba(118,106,192,0)');



//     createEthereumChart = new Chart(ethereumChart, {
//         type: 'line',
//         data: {
//             labels: times,
//             datasets: [{
//                 label: '$',
//                 data: prices,
//                 backgroundColor: gradient,
//                 borderColor: 'rgba(118,106,192,1)',
//                 borderJoinStyle: 'round',
//                 borderCapStyle: 'round',
//                 borderWidth: 3,
//                 pointRadius: 0,
//                 pointHitRadius: 10,
//                 lineTension: .2,
//             }]
//         },

//         options: {
//             title: {
//                 display: false,
//                 text: 'Heckin Chart!',
//                 fontSize: 35
//             },

//             legend: {
//                 display: false
//             },

//             layout: {
//                 padding: {
//                     left: 0,
//                     right: 0,
//                     top: 0,
//                     bottom: 0
//                 }
//             },

//             scales: {
//                 xAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }],
//                 yAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }]
//             },

//             tooltips: {
//                 callbacks: {
//                     //This removes the tooltip title
//                     title: function () { }
//                 },
//                 //this removes legend color
//                 displayColors: false,
//                 yPadding: 10,
//                 xPadding: 10,
//                 position: 'nearest',
//                 caretSize: 10,
//                 backgroundColor: 'rgba(255,255,255,.9)',
//                 bodyFontSize: 15,
//                 bodyFontColor: '#303030'
//             }
//         }
//     });
// }

// async function printBnbChart() {
//     let { times, prices } = await bnbData()

//     let bnbChart = document.getElementById('bnbChart').getContext('2d');

//     let gradient = bnbChart.createLinearGradient(0, 0, 0, 400);

//     gradient.addColorStop(0, 'rgba(243,186,47,.5)');
//     gradient.addColorStop(.425, 'rgba(255,193,119,0)');


//     createBnbChart = new Chart(bnbChart, {
//         type: 'line',
//         data: {
//             labels: times,
//             datasets: [{
//                 label: '$',
//                 data: prices,
//                 backgroundColor: gradient,
//                 borderColor: 'rgba(243,186,47,1)',
//                 borderJoinStyle: 'round',
//                 borderCapStyle: 'round',
//                 borderWidth: 3,
//                 pointRadius: 0,
//                 pointHitRadius: 10,
//                 lineTension: .2,
//             }]
//         },

//         options: {
//             title: {
//                 display: false,
//                 text: 'Heckin Chart!',
//                 fontSize: 35
//             },

//             legend: {
//                 display: false
//             },

//             layout: {
//                 padding: {
//                     left: 0,
//                     right: 0,
//                     top: 0,
//                     bottom: 0
//                 }
//             },

//             scales: {
//                 xAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }],
//                 yAxes: [{
//                     display: false,
//                     gridLines: {}
//                 }]
//             },

//             tooltips: {
//                 callbacks: {
//                     //This removes the tooltip title
//                     title: function () { }
//                 },
//                 //this removes legend color
//                 displayColors: false,
//                 yPadding: 10,
//                 xPadding: 10,
//                 position: 'nearest',
//                 caretSize: 10,
//                 backgroundColor: 'rgba(255,255,255,.9)',
//                 bodyFontSize: 15,
//                 bodyFontColor: '#303030'
//             }
//         }
//     });
// }

// /// Update current price ///
// async function updateBitcoinPrice() {
//     let { times, prices } = await btcData()
//     let currentPrice = prices[prices.length - 1].toFixed(2);

//     document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
// }
// async function updateEthereumPrice() {
//     let { times, prices } = await ethereumData()
//     let currentPrice = prices[prices.length - 1].toFixed(2);

//     document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
// }

// async function updateBnbPrice() {
//     let { times, prices } = await bnbData()
//     let currentPrice = prices[prices.length - 1].toFixed(2);

//     document.getElementById("bnbPrice").innerHTML = "$" + currentPrice;
// }

// updateBitcoinPrice()
// updateEthereumPrice()
// updateBnbPrice()

// printBtcChart()
// printEthereumChart()
// printBnbChart()


// Swiper igo

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,

    },
    mousewheel: {
        invert: true,
    },
    loop: true,
    spaceBetween: 40,
    slideToClickedSlide: true,
    keyboard: true,
});