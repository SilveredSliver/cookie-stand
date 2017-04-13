'use strict';

function CookieItem(nameOfCookie, basePrice) {
  this.nameOfCookie = nameOfCookie;
  this.priceOfCookie = Math.floor(Math.random() * 90 + basePrice);
};

// function AllMyStores(){
//   this.myStores = [];
// }

function StoreList(store) {
  this.title = title;
  this.storeInventory = [];//Is like saying "this is an empty store and I will add cookies to it later"
  this.date = new Date();
};

StoreList.prototype.addCookie = function(cookieName, basePrice) {
  var cookie = new CookieItem(cookieName, basePrice);
  this.storeInventory.push(cookie);
};


// AllMyStores.prototype.addStore = function(storeName) {
//   var store = new StoreList(storeName);
//   this.myStores.push(store);
// };




//Make a funtin for the table of the store contents
StoreList.prototype.getTable = function() {
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');//creates the physical rows
  var tableTitle = document.createElement('th');//creates the physical cells

  tableTitle.textContent = this.title;//adds literal content to the cells
  tableRow.appendChild(tableTitle);
  table.appendChild(tableRow);

  var productRow, productName, productPrice;
  for(var i = 0; i < this.storeInventory.length; i++) {//This is saying as long as there is still unprocessed storeInventory, add 1 to i until it is all accounted for

    // for (var j = 0; j < this.myStores.length; j++) {

      productRow = document.createElement('tr');
      productName = document.createElement('td');
      productPrice = document.createElement('td');

      productName.textContent = this.storeInventory[i].nameOfCookie;
      productPrice.textContent = this.storeInventory[i].priceOfCookie;
    // }
      table.appendChild(productRow);
      productRow.appendChild(productName);
      productRow.appendChild(productPrice);
}
  return table;
};

var app = document.getElementById('app');
var myStore = new StoreList('myStore');
myStore.addCookie('Chum', 50);
myStore.addCookie('Coho', 100);
myStore.addCookie('Sockeye', 150);
myStore.addCookie('King', 200);
var storeTable = myStore.getTable();
app.appendChild(storeTable);




// var dadsStore = new StoreList('dadsStore');
// dadasStore.addCookie('Chum', 50);
// dadsStore.addCookie('Coho', 100);
// dadsStore.addCookie('Sockeye', 150);
// dadsStore.addCookie('King', 200);
//
// var storeTable = myStore.getTable();
//
// app.appendChild(storeTable);








//Need to make code for 10 stores
// var cookieList = {
//   title: 'Cookie Stand',
//   types: [
//     'Coho Cookies',
//     'King Cookies',
//     'Sockeye Cookies',
//     'Chum Cookies',
//   ],
//   employeeList: [
//     'Larry',
//     'Mo',
//     'Curly',
//   ],
//   locations: [
//     'University Village',
//     'Northgate',
//     'Pacific Science Center',
//     'Pike Place Market',
//     'International District',
//   ],
//   businessHours: '9:00 AM - 5:30 PM',
// };
//
// var heading = document.getElementById('title');
// heading.textContent = cookieList.title;
// var ingredientsUl = document.getElementById('cookieTypes');
//
// var ingredientLi;
//
//
// for (var i = 0; i < cookieList.types.length; i++) {
//   console.log('cookieList.types of i', cookieList.types[i]);
//   ingredientLi = document.createElement('li');
//
//   ingredientLi.textContent = cookieList.types[i];
//   ingredientsUl.appendChild(ingredientLi);
// }
//
//
// var stooges = document.getElementById('employeeList');
//
// for (var i = 0; i < cookieList.employeeList.length; i++) {
//   console.log('cookieList.employeeList', cookieList.employeeList);
//   ingredientLi = document.createElement('li');
//
//   ingredientLi.textContent = cookieList.employeeList[i];
//   stooges.appendChild(ingredientLi);
// }
//
// var locationStore = document.getElementById('locations');
// ingredientLi = document.createElement('li');
// ingredientLi.textContent = cookieList.locations;
//
//
// for (var i = 0; i < cookieList.locations.length; i++) {
//   console.log('cookieList.locations', cookieList.locations);
//   ingredientLi = document.createElement('li');
//
//   ingredientLi.textContent = cookieList.locations[i];
//   locationStore.appendChild(ingredientLi);
// }
//
//
// var storeHours = document.getElementById('businessHours');
// ingredientLi = document.createElement('li');
// ingredientLi.textContent = cookieList.businessHours;
//
// storeHours.appendChild(ingredientLi);
//
//
// //set code to make a function to determine when a store is open and when it is closed
