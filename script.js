//alert("testing")
//juhu

window.addEventListener("load", sidenVises);

"use strict";
let points = 0;
let life = 3;

let showSettingsMusic = true;
let showSettingsSound = true;

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start_screen").classList.remove("hide");

    document.querySelector("#settings_button").addEventListener("click", showSettings);
    document.querySelector("#play_button").addEventListener("click", hideStart);

}


//********* SETTINGS ******************

function showSettings() {
    console.log("showSettings");

    document.querySelector("#settings_button").removeEventListener("click", showSettings);
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;

    document.querySelector("#settings_screen").classList.remove("hide");

    document.querySelector("#settings_music").addEventListener("click", toggleMusic);
    document.querySelector("#settings_sound").addEventListener("click", toggleSound);

    document.querySelector("#close_settings").addEventListener("click", hideSettings);
}


function toggleMusic() {
    console.log("toggleMusic");
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
    } else {
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");

        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
    }
}

function musicOff() {
    console.log("musicOff function værdi er" + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);

    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    document.querySelector("#music_mp3").muted = true;
}

function musicOn() {
    console.log("musicOn function værdi er" + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);

    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    document.querySelector("#music_mp3").play();
    document.querySelector("#music_mp3").volume = 0.10;
}


function toggleSound() {
    console.log("toggleSound");
    document.querySelector("#click_sound").play();

    if (showSettingsSound == true) {
        showSettingsSound = false;
        document.querySelector("#sound_sprite").classList.add("on_off");
        document.querySelector("#sound_sprite").classList.remove("on");
        document.querySelector("#sound_sprite").addEventListener("animationend", soundOff);
    } else {
        showSettingsSound = true;
        document.querySelector("#sound_sprite").classList.add("off_on");
        document.querySelector("#sound_sprite").classList.remove("off");

        document.querySelector("#sound_sprite").addEventListener("animationend", soundOn);
    }
}

function soundOff() {
    console.log("soundOff function værdi er" + showSettingsSound);
    document.querySelector("#sound_sprite").removeEventListener("animationend", soundOff);

    document.querySelector("#sound_sprite").classList.remove("on_off");
    document.querySelector("#sound_sprite").classList.add("off");

    document.querySelector("#click_sound").muted = true;
    document.querySelector("#stamp").muted = true;
    document.querySelector("#door").muted = true;
    document.querySelector("#cheer").muted = true;
    document.querySelector("#email_sound").muted = true;
}

function soundOn() {
    console.log("soundOn function værdi er" + showSettingsSound);
    document.querySelector("#sound_sprite").removeEventListener("animationend", soundOn);

    document.querySelector("#sound_sprite").classList.remove("off_on");
    document.querySelector("#sound_sprite").classList.add("on");

    document.querySelector("#click_sound").muted = false;
    document.querySelector("#stamp").muted = false;
    document.querySelector("#door").muted = false;
    document.querySelector("#cheer").muted = false;
}


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#close_settings").removeEventListener("click", hideSettings);
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;
    document.querySelector("#settings_screen").classList.add("hide");

    showStart();
}

//********* SETTINGS SLUT **************


function hideStart() {
    console.log("hideStart")
    document.querySelector("#play_button").removeEventListener("click", hideStart);
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;
    document.querySelector("#start_screen").classList.add("hide");

    showGame();
}


//*********** GAME START *************************


function showGame() {
    console.log("showGame");

    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#game_elements").classList.remove("hide")
    document.querySelector("#spogelse").classList.remove("hide")
    document.querySelector("#barn").classList.remove("hide")
    document.querySelector("#game_frontground").classList.remove("hide")

}

startGame();

function startGame() {
    console.log("startGame");
    document.querySelector("#figure").addEventListener("click", clickFigure);
}

function clickFigure() {
    console.log("clickFigure");

    if (this.classList.contains("type1")) {
        console.log("Type1");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;

    } else if (this.classList.contains("type2")) {
        console.log("Type2");
        points++;
        document.querySelector("#points").innerHTML = points;
    }

    this.classList.add("dissappear");
    this.addEventListener("animationend", nyFigure);

    gameStatus();
}

function nyFigure() {
    console.log("nyFigure");
    this.className = "";
    this.classList.add("type" + Math.floor((Math.random() * 2) + 1));
    this.classList.add("position" + Math.floor((Math.random() * 10) + 1));
}


//************ GAME STATUS *******************

function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#tabt").classList.remove("hide");
    } else if (points == 10) {

        document.querySelector("#vandt").classList.remove("hide");
    }


}

function tabt() {

}

function vandt() {

}
