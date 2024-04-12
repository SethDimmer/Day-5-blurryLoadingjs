const loadText = document.querySelector('.loading-text')
// accessing the loading-text class
const bg = document.querySelector('.bg')
// accessing the bg class

// starting at 0
let load = 0

// running the function in a interval and want to run it every 30 milliseconds
let int = setInterval(blurring, 30)

// this functions task is to load the blurring effect
function blurring() {
    // loading the blurring effect by 1
  load++

// if laod value is GREATER THAN 99 THEN STOP THE INTERVAL
  if (load > 99) {
    clearInterval(int)
  }

//   writes dynamic text on the .loading text class that is in my html
  loadText.innerText = `${load}%`
  
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


