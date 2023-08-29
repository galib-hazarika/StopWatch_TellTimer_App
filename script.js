// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//few const section to grab the below mentioned selector as Id
const time = document.getElementById("main-clock");
const start_swt = document.getElementById("start");
const stop_swt = document.getElementById("stop");
const reset_swt = document.getElementById("reset");

//Intitiate the second and intervals
let seconds = 0;
let intervals = null;

//Event handler for start,stop and reset which will be invoked on click
start_swt.addEventListener("click", start);
stop_swt.addEventListener("click", stop);
reset_swt.addEventListener("click", reset);
function timer() {
  //formatting time
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secds = seconds % 60;

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secds < 10) {
    secds = "0" + secds;
  }
  time.innerText = `${hrs}:${mins}:${secds}`;
}

//start the watch
//call timer only if there is not intervals val after 0.5sec
//the return id of setintervals helps to clrear intevals in stop func
function start() {
  if (intervals) return;
  intervals = setInterval(timer, 500);
  //console.log(intervals);
}

//stop the watch
function stop() {
  clearInterval(intervals);
  intervals = 0;
}
//reset the watch
function reset() {
  stop();
  seconds = 0;
  time.innerText = "00:00:00";
}
