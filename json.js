// JSON DATA
var memberships = [
  {
    "category" : "individual",
    "type" : "adult (age 19+)",
    "monthly_fee" : 67,
    "joiners_fee" : 100,
    "adults" : 1,
    "children" : 0,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
  {
    "category" : "individual",
    "type" : "teen (age 14 - 18)",
    "monthly_fee" : 43,
    "joiners_fee" : 75,
    "adults" : 0,
    "children" : 1,
    "minimum_age" : 14,
    "maximum_age" : 18
  },
  {
    "category" : "individual",
    "type" : "youth (age 0 - 13)",
    "monthly_fee" : 31,
    "joiners_fee" : 45,
    "adults" : 0,
    "children" : 1,
    "minimum_age" : 0,
    "maximum_age" : 13
  },
  {
    "category" : "family",
    "type" : "2 adults only, no children",
    "monthly_fee" : 102,
    "joiners_fee" : 150,
    "adults" : 2,
    "children" : 0,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
  {
    "category" : "family",
    "type" : "1 adult",
    "monthly_fee" : 97,
    "joiners_fee" : 150,
    "adults" : 1,
    "children" : 10,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
  {
    "category" : "family",
    "type" : "2 adults",
    "monthly_fee" : 111,
    "joiners_fee" : 150,
    "adults" : 2,
    "children" : 10,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
  {
    "category" : "family",
    "type" : "3 adults",
    "monthly_fee" : 141,
    "joiners_fee" : 150,
    "adults" : 3,
    "children" : 10,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
  {
    "category" : "family",
    "type" : "4 adults",
    "monthly_fee" : 171,
    "joiners_fee" : 150,
    "adults" : 4,
    "children" : 10,
    "minimum_age" : 19,
    "maximum_age" : 199
  },
];

// DATE INFO
var today = new Date();				// today's date
var currentMonth = today.getMonth(); 		// current month (0 - 11)
var dayOfMonth = today.getDate();	// day of the month

var getDaysInMonth = function(month, year) {
	return new Date(year, month, 0).getDate();
}

var totalDaysInMonth = getDaysInMonth(currentMonth+1, today.getYear());
var daysLeftThisMonth = totalDaysInMonth - dayOfMonth +1;


// var ourRequest = new XMLHttpRequest();

// ourRequest.open('GET', 'file:///C:/learn/json/data.json');
// ourRequest.onload = function() {
// 	console.log(ourRequest.responseText);

// ourRequest.send();

console.log(memberships[0].membership.description);
