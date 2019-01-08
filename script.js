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
    document.querySelector("#gameover_audio").muted = true;
    document.querySelector("#vandt_audio").muted = true;
}

function soundOn() {
    console.log("soundOn function værdi er" + showSettingsSound);
    document.querySelector("#sound_sprite").removeEventListener("animationend", soundOn);

    document.querySelector("#sound_sprite").classList.remove("off_on");
    document.querySelector("#sound_sprite").classList.add("on");

    document.querySelector("#click_sound").muted = false;
    document.querySelector("#gameover_audio").muted = false;
    document.querySelector("#vandt_audio").muted = false;
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
    document.querySelector("#spiligen_button").removeEventListener("click", hideStart);
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;
    document.querySelector("#start_screen").classList.add("hide");

    showInstructions();
}


function showInstructions() {
    console.log("showInstructions")
    document.querySelector("#intro").classList.remove("hide");
    document.querySelector("#game_background").classList.remove("hide");

    document.querySelector("#music_mp3").play();
    document.querySelector("#music_mp3").volume = 0.10;

    document.querySelector("#videre_knap").addEventListener("click", hideInstructions);

}

function hideInstructions() {
    console.log("hideInstructions")
    document.querySelector("#videre_knap").removeEventListener("click", hideInstructions);
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;

    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#start_screen").classList.add("hide");

    showGame();
}


//*********** GAME START *************************


function showGame() {
    console.log("showGame");

    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#game_elements").classList.remove("hide")
    document.querySelector("#game_ui").classList.remove("hide")
    document.querySelector("#figure").classList.remove("hide")

    document.querySelector("#game_frontground").classList.remove("hide")

}

startGame();

function startGame() {
    console.log("startGame");
    document.querySelector("#visning").addEventListener("click", clickVisning);
}

function clickVisning() {
    console.log("clickVisning");

    if (this.classList.contains("type1")) {
        console.log("type1");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;

    } else if (this.classList.contains("type2")) {
        console.log("type2");
        points++;
        document.querySelector("#points").innerHTML = points;
    }

    this.classList.add("dissappear");
    this.addEventListener("animationend", nyVisning);

    gameStatus();
}

function nyVisning() {
    console.log("nyVisning");
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
    } else if (points == 5) {
        document.querySelector("#vandt").classList.remove("hide");
    }


}

//************* GAMEOVER ************************

function visTabt() {
    console.log("visTabt")
    document.querySelector("#tabt").classList.removeEventListener("hide");

    document.querySelector("#music_mp3").volume = 0.10;
    document.querySelector("#gameover_audio").play();
    document.querySelector("#spiligen_button").classList.add("click", hideSlut);

}


function visVandt() {
    console.log("visVandt")
    document.querySelector("#vandt").classList.removeEventListener("hide");

    document.querySelector("#music_mp3").volume = 0.10;
    document.querySelector("#vandt_audio").play();
    document.querySelector("#spiligen_button").classList.add("click", hideSlut);


}

//************* GAMEOVER SLUT ************************

function hideSlut() {
    document.querySelector("#spiligen_button").removeEventListener("click", hideSlut)


    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#game_elemts").classList.remove("hide");
    document.querySelector("#game_ui").classList.remove("hide");
    document.querySelector("#figure").classList.remove("hide");
    document.querySelector("#game_frontground").classList.remove("hide")

    sidenVises();
}

function tidenGaar() {
    console.log("tidenGaar")

    //trækker 1 fra den tid vi har defineret i starten
    timeleft--;


    //her bestemmer at hver 1 sek så skal der opsumeres hvor lang tid der er tilbage. Her skrives det i ms. Man skriver "tidenGaar" fordi den skal kalde på sig selv igen efter 1 sek. Grunden til den er i en if sætning er fordi man skal sige at hvis tiden er større end nul så skal den tælle ned og hvis tiden ikke er større end nul har man jo tabt og man går til gameover

    if (timeleft > 0) {
        setTimeout(tidenGaar, 1000);
    } else if (erSpilletStoppet == false) {

        gameOver();
    }

    console.log(timeleft);
}
