// Insert current date//
var date = $("#currentDay");
var todaysDate = moment().format('dddd MMMM Do YYYY');
console.log(todaysDate);
date.text(todaysDate)

// Save user input
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    console.log("Save");
    var inputTask = $(this).prev().find("textarea").val().trim();
    console.log(inputTask)
    localStorage.setItem($(this).prev().find("textarea").attr("id"), (inputTask));



});

// Get from Storage 
var displayTask = localStorage.getItem("9");
var displayUserTask = document.getElementById("9");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("10");
var displayUserTask = document.getElementById("10");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("11");
var displayUserTask = document.getElementById("11");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("12");
var displayUserTask = document.getElementById("12");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("13");
var displayUserTask = document.getElementById("13");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("14");
var displayUserTask = document.getElementById("14");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("15");
var displayUserTask = document.getElementById("15");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("16");
var displayUserTask = document.getElementById("16");
displayUserTask.value = displayTask;

var displayTask = localStorage.getItem("17");
var displayUserTask = document.getElementById("17");
displayUserTask.value = displayTask;







// //  Advanced Rows and Columns
// var workHours = ["1","2","3","4","5","6","7","8"]
// console.log(workHours)
// for(var i = 0; i = workHours.length; i++){
//     var newRow = $("<div>");


// };


// Hour variable for document

var hour = moment().format("HH");
console.log(hour)


function colorChange() {
    var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
    var currentTime = moment().format("HH");
    // for (var i = 0; i = workHours.length; i++) {
    //     if (workHours[i] > currentTime)
    //     $()
        
    // }

    // }else if (workHours[i] = currentTime) {
    // // add current class 
    // } else {
    // add class future
    $(".form-control").each(function(){
        var timeBlock = JSON.parse($(this).attr("id"))
        console.log(timeBlock)
        console.log(currentTime)
        if(currentTime > timeBlock){
            $(this).addClass("past")
        }else if(currentTime == timeBlock){
            $(this).addClass("present")

        }else{
            $(this).addClass("future")
        }


    });

    }
    colorChange();
