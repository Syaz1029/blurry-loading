const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)  // 30 milisec, blurring is func name

function blurring () {
    load++ // initial value of load is 0, infinity count

    if ( load > 99) { //stop interval from going infinitiy, so stop at 100
        clearInterval (int)
    }

    // console.log (load) // text loading number nye until bape

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale (load, 0, 100, 1, 0) //  1 is blurry, 0 is clear
    bg.style.filter = `blur(${scale (load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    
    // ref: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

