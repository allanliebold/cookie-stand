// Create object
var firstAndPike = {
// Create object properties and set values for each
  name: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3
}

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2
}

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7
}

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 4.6
}

var Alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6
}

function cookiesPerHr(min, max, cookies) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var people = Math.floor(Math.random() * (max - min)) + min;
  console.log('People: ', people);
  return people * cookies;
}

function listSales(store){
    var container = document.createElement('ul');
    var listArr = [];
    var cookieArr = [];
    var timeArr = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm ', '6pm: ', '7pm: ', '8pm: '];

    for (var i=0; i < 13; i++){
      var thisHr = Math.floor(cookiesPerHr(store.minCust, store.maxCust, store.avgCookies));
      console.log('Cookies: ', thisHr);
      listArr.push('<li>' + timeArr[i] + thisHr + '</li>');
      cookieArr.push(thisHr);
    }

    var totalCookies = 0;
    for (var i=0; i < cookieArr.length; i++){
      totalCookies = totalCookies + cookieArr[i];
    }

    console.log("Total cookies: ", totalCookies);

}
