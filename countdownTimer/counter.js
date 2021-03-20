// I can start a 25 minute, and the timer will go off once 25 minutes has elapsed.
// I can reset the clock for my next.
// I can customize the length of each time.
// I can get a sound notification when the time is finished.



//  -make the visual page
//      -big number counters
//      -when i click the Edit i get 3 input to change the value
//          -check not more than 24h    60m     60s and not less than 0
//          ----or just peaple can select
//      -on the top of each input thae is a lablel hour minutes seconds
//      -when i put numbers in inputs start button become active (mouse curser pointer)
//      -when i start the start button change to stop or pause
//      -
//      -
//  -make three nested loop top: hours middel: minutes inside: seconds
//  -first
//  -three function for h m s 
//  -i can use secons of time of the computer the diff it makes 
//  -
//  -
//  -

// for (let i = 0; i < 10; i++) {
//     setTimeout(function(){
//         }, 5000);
// }
// var cancel = setInterval(showSeconds, 1000);
// let seconds = new Date().getTime() / 1000;
// console.log(Math.floor(seconds));


// var check = function(){
//         setTimeout(check, 1000); // check again in a second
//         ii++;
//         console.log(ii);
// }
// let ii = 0
// check();




// $(document).ready(function () {
    
    
    
    
let hourInit;
let minInit;
let secInit ;

// minSec => each minute have 60 seconds and each hour have 60 minutes (0 to 59 = 60)
const minSec = 3;

function showTime() {
    if (secInit < 10) {
        $("#secText").text("0" + secInit);
    } else {
        $("#secText").text(secInit);
    }
    if (minInit < 10) {
        $("#minText").text("0" + minInit);
    } else {
        $("#minText").text(minInit);
    }
    if (hourInit < 10) {
        $("#hourText").text("0" + hourInit);
    } else {
        $("#hourText").text(hourInit);
    }
}
// function timerControler() {
const timerControler = function () {
    //     //if sec > 0 then count seconds from initial
    //     //else if min > 0 then min-- then count sec from 60 (i =60 cal showSec)
    //     //else if hour > 0 then hour-- then min=59 then count sec from 60
    if (secInit > 0) {
        secInit -= 1;
        showTime()
    } else if (minInit > 0) { //&& secInit <= 0
        minInit--;
        secInit = minSec;
        showTime()
    } else if (hourInit > 0) {
        hourInit--
        minInit = minSec;
        secInit = minSec;
        showTime()
    }
}
// function tNow() {
//     let seconds = new Date().getTime() / 1000;
//     seconds = Math.floor(seconds);
//     return seconds;
// }
var check = function () {
    timerControler();
    if (hourInit > 0 || minInit > 0 || secInit > 0) {
        setTimeout(check, 1000); // check again in a second
    } else {
        //ye seda pakhsh kon
        console.log("bling bling bling bling!");
    }
    // let beginTime = tNow();
    // let diff = 50;  //ino bayad az voroodi hesab konam
    // // while (hourInit > 0 || minInit > 0 || secInit > 0) {
    // while (tNow() - beginTime < diff) {
    //     if (tNow() - beginTime >= 1) {
    //         timerControler();
    //         // setTimeout(timerControler, 1000); // check again in a second
    //         // console.log("be inja resid?");
    //     }
    // }
    // //ye seda pakhsh kon
}
    // check();




// });