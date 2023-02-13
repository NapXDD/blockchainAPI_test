function readyFetch(){
    let tl = gsap.timeline()
    tl.from(".coins-list", {duration: 1, opacity: 0})
    .from(".crypto-footer-container", {duration: 1, opacity: 0})
}

window.addEventListener("load", readyFetch)