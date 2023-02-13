const sliderElement = document.querySelector(".slide-wrapper")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

let sliderPosition = 1
let bannerWitdh = 720
sliderElement.style.transform = "translate3d(720px,0,0)"

//cooldown a function after execute
function throttle(func, delay){
    var func = func.bind(func),
        last = Date.now();
    return function(){
        if(Date.now() - last > delay){
            func();
            last = Date.now();
        }
    }
}

const RECHARGE_TIME = 1000;

function loopStart(){
    let tl = gsap.timeline()
    tl.to(".slide-wrapper", {duration: 1, x: bannerWitdh*sliderPosition})
    .to(".slide-wrapper", {duration: 0, x: 720})
    sliderPosition = 1
}

function loopEnd(){
    let tl2 = gsap.timeline()
    tl2.to(".slide-wrapper", {duration: 1, x: bannerWitdh*sliderPosition})
    .to(".slide-wrapper", {duration: 0, x: bannerWitdh*(-1)})
    sliderPosition = -1
}

function switchBanner(){
    gsap.to(".slide-wrapper", {duration: 1, x: bannerWitdh*sliderPosition})
}

function onPrev(){
    sliderPosition++
    if(sliderPosition === 2){
        loopEnd()
    }
    else{
        switchBanner()
    }
}

function onNext(){
    sliderPosition--
    if(sliderPosition === -2){
        loopStart()
    }
    else{
        switchBanner()
    }
}

let throttleNext = throttle(onNext, RECHARGE_TIME)
let throttlePrev = throttle(onPrev, RECHARGE_TIME)

prevBtn.addEventListener("click", throttlePrev)
nextBtn.addEventListener("click", throttleNext)







