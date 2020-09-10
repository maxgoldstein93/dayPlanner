// Insert current date//

// var date = $("<div>")
// date.text(todaysDate);
// $("#currentDay").append(date);

var date = $("#currentDay");
date.text(todaysDate)

console.log(date);


var todaysDate = moment().format('dddd MMMM Do YYYY');
console.log(todaysDate);

// Rows and Columns

