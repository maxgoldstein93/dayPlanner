// Insert current date//
var date = $("#currentDay");
var todaysDate = moment().format('dddd MMMM Do YYYY');
console.log(todaysDate);
date.text(todaysDate)

// Saving Inputs to local storage
// var inputTask =$("#nineAm").value;

function displayTask(){
    var displayTask =localStorage.getItem("nineAm");
    var displayUserTask =document.querySelector("#nineAm");
    displayUserTask.textContent = displayTask;
}

// Save user input
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var inputTask = document.querySelector("#nineAm").value.trim();
    console.log(inputTask)
    localStorage.setItem("nineAm",JSON.stringify(inputTask));
    console.log("Save")
    
});

// //  Advanced Rows and Columns
// var workHours = ["1","2","3","4","5","6","7","8"]
// console.log(workHours)
// for(var i = 0; i = workHours.length; i++){
//     var newRow = $("<div>");
    

// };
// Hour variable for document
// var hour =moment().format("H");
// console.log(hour)


// Maybe need a loop??
// function () color change

// if (currentTime > H){
    // display class past

// } else if( current time = H){
//   display class present
// }else{
// display class future
// }

