

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let totGuestScore = 0;
let totHomeScore = 0;

function homePlusOne(){
    totHomeScore += 1;
    homeScore.textContent = totHomeScore;
}

function homePlusTwo(){
    totHomeScore += 2;
    homeScore.textContent = totHomeScore;
}

function homePlusThree(){
    totHomeScore += 3;
    homeScore.textContent = totHomeScore;
}

function guestPlusOne(){
    totGuestScore += 1;
    guestScore.textContent = totGuestScore;
}

function guestPlusTwo(){
    totGuestScore += 2;
    guestScore.textContent = totGuestScore;
}

function guestPlusThree(){
    totGuestScore += 3;
    guestScore.textContent = totGuestScore;
}