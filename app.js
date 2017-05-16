'use strict';
// Construct Store object
function Store(name, minCust, maxCust, avgCookies) {
  this.name = name; // dynamic name property
  this.minCust = minCust; // dynamic minimum customer property
  this.maxCust = maxCust; // dynamic maximum customer property
  this.avgCookies = avgCookies; // dynamic average cookies property
}
// instantiate new Store objects for five stores
var firstAndPike = new Store('1st & Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCen = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 4.6);
var alki = new Store('Alki', 2, 16, 4.6);
// An array comprised of the five Store objects.
var storeArr = [firstAndPike, seaTac, seaCen, capHill, alki];
// A function that will be used to generate a number of cookies sold in an hour. The parameters come from the objects above.
function cookiesPerHr(min, max, cookies) {
  min = Math.ceil(min);
  max = Math.floor(max);
// Get a random number between the max and the min and store it in a variable called people.
  var people = Math.floor(Math.random() * (max - min)) + min;
  console.log('People: ', people);
// Multiply people by the avgCookies number from the store object and return the product.
  return people * cookies;
}

// The main function of the app. Each store object above is used as the parameter.
function listSales(store){
  var list = document.createElement('ul');
// Two arrays, one used to create strings which will be inserted into the page's html
  var listArr = [];
// And cookieArr stores the numbers of cookies per hour so they can be added together for the total
  var cookieArr = [];
// timeArr will be joined into listArr's strings so the times for each business hour will be displayed alongside the cookies sold
  var timeArr = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm ', '6pm: ', '7pm: ', '8pm: '];

// A for loop that uses the cookiesPerHr function above to get a number of cookies for each business hour, then pushes each number into listArr and cookieArr.
  for (var i=0; i < 15; i++){
    var thisHr = Math.floor(cookiesPerHr(store.minCust, store.maxCust, store.avgCookies));
    console.log('Cookies: ', thisHr);
// listArr takes the current index from the timeArr and the current cookiesPerHr/thisHr value and concatenates those into a list item.
    listArr.push('<li>' + timeArr[i] + thisHr + '</li>');
// cookieArr just takes the number
    cookieArr.push(thisHr);
  }

// This loops through cookieArr and adds each number together to get the total of all of them.
  var totalCookies = 0;
  for (var h=0; h < cookieArr.length; h++){
    totalCookies = totalCookies + cookieArr[h];
  }
// This pushes the final list item to display the total cookies for the day after all of the hours
  listArr.push('<li> Total: ' + totalCookies + '</li>');
// This puts a list item at the beginning of the list with the current store name as an <h2>.
  listArr.unshift('<li><h2>'+ store.name +'</h2></li>');

// Joins together all of the strings pushed into listArr to create one big string
  var fullList = listArr.join('');
  list.innerHTML = fullList;
// Inserts the list into the html document
  document.body.appendChild(list);
}

// This loops through the array of store objects to run the listSales function for all 5 of them
for (var i = 0; i < storeArr.length; i++){
  listSales(storeArr[i]);
}
