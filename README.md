Day Planner App

Introduction:

This project is a day planner available for anyone to use. To use the planner the user can input what their task is at that time of the day. To save the task the user will then click the save icon. If the time is in the past the row will be grey, if the time is present the row will be red and grey if in the future.

To download this project the user can make a git clone from my github or use the project here https://maxgoldstein93.github.io/dayPlanner/.

To make the day planner the first thing I did was to make rows and columns for each part of the workday utilizing bootstrap. I then used moment.js to display the current date in the header making use of jquery. From there I worked on storage with javascript and saved the inputs to local storage and recalled them. To change the colors I wrote a function to check if the current time is less than, equal to, or greater than the current time. Inside the conditional statements I added the classes to change colors based on the time of day.

![Work Day Scheduler](https://user-images.githubusercontent.com/69087369/92977878-2bf70900-f45c-11ea-946c-d769b08c2c28.gif)

MIT License

Copyright (c) [2020] [Max Goldstein]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





