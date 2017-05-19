'use strict';
var form = document.getElementById('store_form');
var table = document.getElementById('sales_table');

var data = [];

// Construct Store object
function Store(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName; // dynamic name property
  this.minCust = minCust; // dynamic minimum customer property
  this.maxCust = maxCust; // dynamic maximum customer property
  this.avgCookies = avgCookies; // dynamic average cookies property
}

function formData(e){
  e.preventDefault();
  var storeName = e.target.store_name.value;
  var minCust = parseInt(e.target.min_cust.value);
  var maxCust = parseInt(e.target.max_cust.value);
  var avgCookies = parseInt(e.target.avg_cookies.value);

  var currentStore = new Store(storeName, minCust, maxCust, avgCookies);
  console.log(currentStore);
  currentStore.getSales();
  createTable();
  form.reset();
}

// Creates a prototype method to get the number of cookies sold in an hour at a store
Store.prototype.cookiesPerHr = function(){
  // Get a random number between the max and the min and store it in a variable called people.
  console.log('Max Customers: ' + this.maxCust + ' Min Customers: ' + this.minCust);
  var people = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  // Multiply people by the avgCookies number from the store object and return the product.
  console.log('People: ', people);
  return people * this.avgCookies;
};

Store.prototype.getSales = function(){
// And cookieArr stores the numbers of cookies per hour so they can be added together for the total
  console.log('This: ', this);
  var cookieArr = [];
//  var table = document.getElementbyId('othershell');

  data.push(this.storeName);
  console.log('Store Name: ', data);
// A for loop that uses the cookiesPerHr function above to get a number of cookies for each business hour, then pushes each number into listArr and cookieArr.
  for (var i=0; i < 15; i++){
    var thisHr = Math.floor(this.cookiesPerHr());

// listArr takes the current index from cookiesPerHr/thisHr value and concatenates those into a list item.
    data.push(thisHr);
// cookieArr just takes the number
    cookieArr.push(thisHr);
  }

// This loops through cookieArr and adds each number together to get the total of all of them.
// I'll make this a separate function.
  var totalCookies = 0;
  for (var h=0; h < cookieArr.length; h++){
    totalCookies = totalCookies + cookieArr[h];
    console.log('Total Cookies: ', totalCookies);
  }

  data.push(totalCookies);
};

function createTable(){
  var dataArr = [];

  for (var i = 0; i < data.length; i++) {
    dataArr.push('<td>' + data[i] + '</td>');
  }

  dataArr = dataArr.join('');
  console.log('The data is: ', dataArr);
  var row;
  row = document.createElement('tr');
  row.innerHTML = dataArr;
  console.log('Row is: ', row);
  table.appendChild(row);

// the data array needs to be empty for the next user input, or the data will keep adding on.
  data = [];
}

form.addEventListener('submit', formData);
