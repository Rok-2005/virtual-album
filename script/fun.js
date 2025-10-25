const disc = document.querySelector(".disc")     // najde disc element
const audio = document.querySelector(".disc audio") // najde audio element

const spin = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }] // definicija vrednosti animacije
const timing = {
    duration: 5000,
    iterations: Infinity,
};   // timeframe animacije 

disc.animate(spin, timing)  // doda animacijo na element (disc)
const animation = disc.getAnimations()[0]  // poisce animacije na elementu izbere prvo u zaporedju
animation.pause() // ustavi animacijo

disc.addEventListener("click", function () {  // doda "click" event na element

    if (audio.paused) {   //  ce je audio paused in zacnemo animacijo in glasbo  cene obratno
        audio.play()
        animation.play()
    }
    else {
        audio.pause()
        animation.pause()
    }

})
