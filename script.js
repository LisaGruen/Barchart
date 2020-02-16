"use strict";
//Create an array
const AmountCustomers = [
  "2",
  "22",
  "20",
  "10",
  "17",
  "32",
  "25",
  "26",
  "6",
  "12",
  "18",
  "12",
  "21",
  "3",
  "23",
  "21",
  "11",
  "18",
  "33",
  "26",
  "28",
  "4",
  "14",
  "15",
  "22",
  "21",
  "6",
  "12",
  "18",
  "12",
  "21",
  "3",
  "23",
  "18",
  "12",
  "21",
  "3",
  "23",
  "21",
  "11",
  "18",
  "33",
  "26",
  "28"
];
//show array
function showArray() {
  for (let i = 1; i <= 40; i++) {
    //get number in a queue
    const charts = document.querySelector(".charts > div:nth-child(" + i + ")");
    charts.style.setProperty("--height", AmountCustomers[i - 1]);
  }
}

//repeat get number in a queue
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32 + 1);
}

//loop the function
document.addEventListener("DOMContentLoaded", run);

function run() {
  setTimeout(function() {
    //add to the end of array .push
    AmountCustomers.push(getNumberOfCustomers());
    //remove first element in array .shift
    AmountCustomers.shift();
    showArray();

    run();
  }, 1000);
}
