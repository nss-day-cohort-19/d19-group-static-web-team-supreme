/* Set DOM Elements */

var product1 = document.getElementById("product1");
var product2 = document.getElementById("product2");
var product3 = document.getElementById("product3");
var product4 = document.getElementById("product4");
var product5 = document.getElementById("product5");
var product6 = document.getElementById("product6");
var product7 = document.getElementById("product7");
var product8 = document.getElementById("product8");

product1.innerHTML = "<h2 class='productTitle'>" + watchList[0].name + "</h2>";
product1.innerHTML += "<img src='" + watchList[0].url + "' rel='fancy watch' class='productImage'>";
product1.innerHTML += "<p>" + watchList[0].description + "</p>";
product1.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[0].price + "</p>";

product2.innerHTML = "<h2 class='productTitle'>" + watchList[1].name + "</h2>";
product2.innerHTML += "<img src='" + watchList[1].url + "' rel='fancy watch' class='productImage'>";
product2.innerHTML += "<p>" + watchList[1].description + "</p>";
product2.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[1].price + "</p>";

product3.innerHTML = "<h2 class='productTitle'>" + watchList[2].name + "</h2>";
product3.innerHTML += "<img src='" + watchList[2].url + "' rel='fancy watch' class='productImage'>";
product3.innerHTML += "<p>" + watchList[2].description + "</p>";
product3.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[2].price + "</p>";

product4.innerHTML = "<h2 class='productTitle'>" + watchList[3].name + "</h2>";
product4.innerHTML += "<img src='" + watchList[3].url + "' rel='fancy watch' class='productImage'>";
product4.innerHTML += "<p>" + watchList[3].description + "</p>";
product4.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[3].price + "</p>";

product5.innerHTML = "<h2 class='productTitle'>" + watchList[4].name + "</h2>";
product5.innerHTML += "<img src='" + watchList[4].url + "' rel='fancy watch' class='productImage'>";
product5.innerHTML += "<p>" + watchList[4].description + "</p>";
product5.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[4].price + "</p>";

product6.innerHTML = "<h2 class='productTitle'>" + watchList[5].name + "</h2>";
product6.innerHTML += "<img src='" + watchList[5].url + "' rel='fancy watch' class='productImage'>";
product6.innerHTML += "<p>" + watchList[5].description + "</p>";
product6.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[5].price + "</p>";

product7.innerHTML = "<h2 class='productTitle'>" + watchList[6].name + "</h2>";
product7.innerHTML += "<img src='" + watchList[6].url + "' rel='fancy watch' class='productImage'>";
product7.innerHTML += "<p>" + watchList[6].description + "</p>";
product7.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[6].price + "</p>";

product8.innerHTML = "<h2 class='productTitle'>" + watchList[7].name + "</h2>";
product8.innerHTML += "<img src='" + watchList[7].url + "' rel='fancy watch' class='productImage'>";
product8.innerHTML += "<p>" + watchList[7].description + "</p>";
product8.innerHTML += "<p class='productPrice'><strong>Price:</stong> $" + watchList[7].price + "</p>";