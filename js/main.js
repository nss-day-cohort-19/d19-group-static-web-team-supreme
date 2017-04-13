
var watchList = [{
	name: "X-ecutive",
	price: 160,
	url: "images/watch1.jpg",
	description: "The X-ecutive is our flagship wactch collection for a reason.  It's sleek, professional style lets everyone in the room know you are the boss, even if you aren't.  Establish yourself above petty corporate politics and go straight to the top of the food chain with the X-ecutive."

},{
	name: "Impression",
	price: 175,
	url: "images/watch2.jpg",
	description: "Sales is like magic.  It's all about making the audience see what they want to see; they want to be impressed.  Establish your status as a success, with our smart and stylish Impression model watch.  Your clients won't know what hit them."
},{
	name: "Aquisition",
	price: 115,
	url: "images/watch3.jpg",
	description: "Money is everything ... but it is a pretty good scoreboard.  Show others your name is on the leaderboard with our Aquisition model watch.  You've owned your profession and squashed your competitors, now show it with your style."
},{
	name: "Selliczar",
	price: 90,
	url: "images/watch4.jpg",
	description: "The are regular sale people, and then there is you.  You can get in the door and in front of decision makers with ease.  Once you identified your customer you've got them; it's just a matter of time.  You are a Selliczar."
},{
	name: "Chronos",
	price: 150,
	url: "images/watch5.jpg",
	description: "Production of widgets or ideas requires coordination at the highest level.  Maintain your punctuality with the Chonos model watch, and show others your expectation of the same.  Time is money, and time is what you do best."
},{
	name: "Stock Ticker",
	price: 125,
	url: "images/watch6.jpg",
	description: "Navigating the stock market take vigilence, whether it's for your client or personal portfolio.  Timing is everything, and with our Stock Ticker model watch, your timing turns into a work of art.  This special model watch give alerts for the openning and closing bell of all the major world-wide exchanges."
},{
	name: "Greenback",
	price: 110,
	url: "images/watch7.jpg",
	description: "The world goes around the Sun, but money makes the world turn.  Show your collegues that you've got your eye on the prize with the slick Greenback model watch.  This nifty addition to our collection is a great starting model for the aspiring collecter."
},{
	name: "Bull Tempo",
	price: 210,
	url: "images/watch8.jpg",
	description: "It takes a real bull to manage the fast paced business world of today.  But the truth is the business world needs to keep pace with you.  Never slowing down, never settling, you have a Bull Tempo."
}];

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
product1.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[0].price + "</p>";
product1.innerHTML += "<button type='button'>BUY</button>"

product2.innerHTML = "<h2 class='productTitle'>" + watchList[1].name + "</h2>";
product2.innerHTML += "<img src='" + watchList[1].url + "' rel='fancy watch' class='productImage'>";
product2.innerHTML += "<p>" + watchList[1].description + "</p>";
product2.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[1].price + "</p>";
product2.innerHTML += "<button type='button'>BUY</button>"

product3.innerHTML = "<h2 class='productTitle'>" + watchList[2].name + "</h2>";
product3.innerHTML += "<img src='" + watchList[2].url + "' rel='fancy watch' class='productImage'>";
product3.innerHTML += "<p>" + watchList[2].description + "</p>";
product3.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[2].price + "</p>";
product3.innerHTML += "<button type='button'>BUY</button>"

product4.innerHTML = "<h2 class='productTitle'>" + watchList[3].name + "</h2>";
product4.innerHTML += "<img src='" + watchList[3].url + "' rel='fancy watch' class='productImage'>";
product4.innerHTML += "<p>" + watchList[3].description + "</p>";
product4.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[3].price + "</p>";
product4.innerHTML += "<button type='button'>BUY</button>"

product5.innerHTML = "<h2 class='productTitle'>" + watchList[4].name + "</h2>";
product5.innerHTML += "<img src='" + watchList[4].url + "' rel='fancy watch' class='productImage'>";
product5.innerHTML += "<p>" + watchList[4].description + "</p>";
product5.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[4].price + "</p>";
product5.innerHTML += "<button type='button'>BUY</button>"

product6.innerHTML = "<h2 class='productTitle'>" + watchList[5].name + "</h2>";
product6.innerHTML += "<img src='" + watchList[5].url + "' rel='fancy watch' class='productImage'>";
product6.innerHTML += "<p>" + watchList[5].description + "</p>";
product6.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[5].price + "</p>";
product6.innerHTML += "<button type='button'>BUY</button>"

product7.innerHTML = "<h2 class='productTitle'>" + watchList[6].name + "</h2>";
product7.innerHTML += "<img src='" + watchList[6].url + "' rel='fancy watch' class='productImage'>";
product7.innerHTML += "<p>" + watchList[6].description + "</p>";
product7.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[6].price + "</p>";
product7.innerHTML += "<button type='button'>BUY</button>"

product8.innerHTML = "<h2 class='productTitle'>" + watchList[7].name + "</h2>";
product8.innerHTML += "<img src='" + watchList[7].url + "' rel='fancy watch' class='productImage'>";
product8.innerHTML += "<p>" + watchList[7].description + "</p>";
product8.innerHTML += "<p class='productPrice'><strong>Price </stong> $" + watchList[7].price + "</p>";
product8.innerHTML += "<button type='button'>BUY</button>"