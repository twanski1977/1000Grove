// JSON DATA
var memberships = [
	{
		"membership" : {
			"category" : "individual",
			"type" : "adult",
			"minimum_age" : 19,
			"maximum_age" : 199,
			"description" : "Adult members includes anyone 19 years of age and older. Exceptions are college students who reside with their parents through age 23. They must show proof with a current college ID or curriculum.",
			"monthly_fee" : 67,
			"joiners_fee" : 100
		}
	},
	{
		"membership" : {
			"category" : "individual",
			"type" : "teen",
			"description" : "Teen members include anyone age 14 to 18. Anyone age 19 to 23 and are college students who reside with their parents are still considered as teen. They must show proof with a current college ID or curriculum.",
			"minimum_age" : 14,
			"maximum_age" : 18,
			"monthly_fee" : 43,
			"joiners_fee" : 75
		}
	},
	{
		"membership" : {
			"category" : "individual",
			"type" : "youth",
			"description" : "Youth members include anyone age 0 to 13.",
			"minimum_age" : 0,
			"maximum_age" : 13,
			"monthly_fee" : 31,
			"joiners_fee" : 45
		}
	}
]

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