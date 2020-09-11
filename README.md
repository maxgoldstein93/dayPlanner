Introduction:

This project is a day planner available for anyone to use. To use the planner the user can input what their task is at that time of the day. To save the task the user will then click the save icon. If the time is in the past the row will be grey, if the time is present the row will be red and grey if in the future.

To download this project the user can make a git clone from my github or use the project here https://maxgoldstein93.github.io/dayPlanner/.

To make the day planner the first thing I did was to make rows and columns for each part of the workday. I then used moment.js to display the current date in the header making use of jquery. From there I worked on storage and saved the inputs to local storage and recalled them. To change the colors I wrote a function to check if the current time is less than, equal to, or greater than the current time. Inside the conditional statements I added the classes to change colors based on the time of day.




