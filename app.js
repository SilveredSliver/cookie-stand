'use strict';
//Need to make code for 10 stores
var cookieList = {
  title: 'Cookie Stand',
  types: [
    'Coho Cookies',
    'King Cookies',
    'Sockeye Cookies',
    'Chum Cookies',
  ],
  employeeList: [
    'Larry',
    'Mo',
    'Curly',
  ],
  address: '5116 Kenilworth PL NE, Seattle, WA',
  businessHours: '9:00 AM - 5:30 PM',
};

var heading = document.getElementById('title');
heading.textContent = cookieList.title;
var ingredientsUl = document.getElementById('cookieTypes');

var ingredientLi;


for (var i = 0; i < cookieList.types.length; i++) {
  console.log('cookieList.types of i', cookieList.types[i]);
  ingredientLi = document.createElement('li');

  ingredientLi.textContent = cookieList.types[i];
  ingredientsUl.appendChild(ingredientLi);
}


var stooges = document.getElementById('employeeList');

for (var i = 0; i < cookieList.employeeList.length; i++) {
  console.log('cookieList.employeeList', cookieList.employeeList);
  ingredientLi = document.createElement('li');

  ingredientLi.textContent = cookieList.employeeList[i];
  stooges.appendChild(ingredientLi);
}

var locationStore = document.getElementById('address');
ingredientLi = document.createElement('li');
ingredientLi.textContent = cookieList.address;

locationStore.appendChild(ingredientLi);


var storeHours = document.getElementById('businessHours');
ingredientLi = document.createElement('li');
ingredientLi.textContent = cookieList.businessHours;

storeHours.appendChild(ingredientLi);


//set code to make a function to determine when a store is open and when it is closed
