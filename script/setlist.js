function setlist() {
    const audio = document.querySelector(".disc audio")   // najde audio element
    const songs = document.querySelectorAll(".song")      // najde vse pesmi v seznamu

    for (let song of songs) {                                // loop cez songs
        song.addEventListener("click", function () {
            const active = document.querySelector(".active") // element z classom active (pesem)


            active.classList.remove("active")                // udstrani class active aktivni pesmi 
            song.classList.add("active")                   // doda class active izbrani pesmi 

            const songpath = song.dataset.song         // najde informacijo o lokaciji audio datoteke zapisano v HTML elementu 
            audio.src = songpath                      // doloci katero datoteko predvaja audio element 

            if (IS_PLAYING) {   // predvaja datoteko samo ce se disk vrti 
                audio.play()
            }

        })
    }
}

setlist()