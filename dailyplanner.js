// Insert current date//
var date = $("#currentDay");
var todaysDate = moment().format('dddd MMMM Do YYYY');
console.log(todaysDate);
date.text(todaysDate)

// Save user input
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    console.log("Save");
    var inputTask = $(this).prev("textarea").val().trim();
    localStorage.setItem($(this).prev("textarea").attr("id"),(inputTask));

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

// Change row clolor

function colorChange() {
    var currentTime = moment().format("HH");
    $(".form-control").each(function(){
        var timeBlock = JSON.parse($(this).attr("id"))
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
