'use strict';
// Construct Store object
function Store(name, minCust, maxCust, avgCookies) {
  this.name = name; // dynamic name property
  this.minCust = minCust; // dynamic minimum customer property
  this.maxCust = maxCust; // dynamic maximum customer property
  this.avgCookies = avgCookies; // dynamic average cookies property
}

// Creates a prototype method to get the number of cookies sold in an hour at a store
Store.prototype.cookiesPerHr = function() {
  // Get a random number between the max and the min and store it in a variable called people.
  var people = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  // Multiply people by the avgCookies number from the store object and return the product.
  return people * this.avgCookies;
};

// Instantiate new Store objects for five stores
var firstAndPike = new Store('1st & Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCen = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 4.6);
var alki = new Store('Alki', 2, 16, 4.6);

// An array comprised of the five Store objects.
var storeArr = [firstAndPike, seaTac, seaCen, capHill, alki];

function createHeader() {
  var timeArr = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];
  var header_row = [];
  for (var i=0; i < timeArr.length; i++){
    header_row.push('<td>' + timeArr[i] + '</td>');
  }
  var full_row = header_row.join('');
  console.log(header_row);
  header_row = document.createElement('thead');
  header_row.innerHTML = full_row;
  document.body.appendChild(header_row);
}

// The main function of the app. Each store object above is used as the parameter.
Store.prototype.listSales = function(){

// Two arrays, one used to create strings which will be inserted into the page's html
  var listArr = [];
// And cookieArr stores the numbers of cookies per hour so they can be added together for the total
  var cookieArr = [];
//  var table = document.getElementbyId('othershell');

  listArr.push('<td>' + this.name + '</td>');
// A for loop that uses the cookiesPerHr function above to get a number of cookies for each business hour, then pushes each number into listArr and cookieArr.
  for (var i=0; i < 15; i++){
    var thisHr = Math.floor(this.cookiesPerHr());
    console.log('Cookies: ', thisHr);
// listArr takes the current index from cookiesPerHr/thisHr value and concatenates those into a list item.
    listArr.push('<td>' + thisHr + '</td>');
// cookieArr just takes the number
    cookieArr.push(thisHr);
  }

// This loops through cookieArr and adds each number together to get the total of all of them.
  var totalCookies = 0;
  for (var h=0; h < cookieArr.length; h++){
    totalCookies = totalCookies + cookieArr[h];
  }

  listArr.push('<td>' + totalCookies + '</td>');
  var fullList = listArr.join('');

  var new_row = document.createElement('tr');
  new_row.innerHTML = fullList;
  document.body.appendChild(new_row);
};

createHeader();
// This loops through the array of store objects to run the listSales function for all 5 of them
for (var i = 0; i < storeArr.length; i++){
  storeArr[i].listSales();
}
