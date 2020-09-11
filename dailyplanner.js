// Insert current date//
var date = $("#currentDay");
var todaysDate = moment().format('dddd MMMM Do YYYY');
console.log(todaysDate);
date.text(todaysDate)

// Save user input
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    console.log("Save");
    var inputTask = $(this).prev().find("input").val().trim();
    console.log(inputTask)
    localStorage.setItem($(this).prev().find("input").attr("id"),(inputTask));


    
});

            // Get from Storage 
    var displayTask =localStorage.getItem("nineAm");
    var displayUserTask =document.querySelector("#nineAm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("tenAm");
    var displayUserTask =document.querySelector("#tenAm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("elevenAm");
    var displayUserTask =document.querySelector("#elevenAm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("twelvePm");
    var displayUserTask =document.querySelector("#twelvePm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("onePm");
    var displayUserTask =document.querySelector("#onePm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("twoPm");
    var displayUserTask =document.querySelector("#twoPm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("threePm");
    var displayUserTask =document.querySelector("#threePm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("fourPm");
    var displayUserTask =document.querySelector("#fourPm");
    displayUserTask.value = displayTask;

    var displayTask =localStorage.getItem("fivePm");
    var displayUserTask =document.querySelector("#fivePm");
    displayUserTask.value = displayTask;
    
    



    

// //  Advanced Rows and Columns
// var workHours = ["1","2","3","4","5","6","7","8"]
// console.log(workHours)
// for(var i = 0; i = workHours.length; i++){
//     var newRow = $("<div>");
    

// };
// Hour variable for document
// var hour =moment().format("HH");
// console.log(hour)


// Maybe need a loop??
// function () color change

// if (currentTime > H){
    // add to input class past

// } else if( current time = H){
//   add class present
// }else{
// add class future
// }

