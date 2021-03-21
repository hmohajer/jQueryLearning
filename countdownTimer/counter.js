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


$(document).ready(function () {

    let hourInit;
    let minInit;
    let secInit;
    let bell = true;

    // MINSEC => each minute have 60 seconds and each hour have 60 minutes (0 to 59 = 60)
    const MINSEC = 59;

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
            showTime();
        } else if (minInit > 0) { //&& secInit <= 0
            minInit--;
            secInit = MINSEC;
            showTime();
        } else if (hourInit > 0) {
            hourInit--
            minInit = MINSEC;
            secInit = MINSEC;
            showTime();
        }
    }
    function clear() {

    }
    function errorCheck(val, upTo) {
        if (val < 0 || val >= upTo) {
            $("#msg").html("Please put a number between 0 to " + upTo + "(inclusive)");
            setTimeout(() => $("#msg").html(""), 7000);
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
        } else if (bell) {
            //ye seda pakhsh kon
            console.log("bling bling bling bling!");
            $("#finishAudio")[0].play();

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

    $("#timeInputSave").on("click", function () {
        hourInit = parseInt($("#hourInput").val());
        minInit = parseInt($("#minInput").val());
        secInit = parseInt($("#secInput").val());
        $("#timeSaved").text("Time: (" + hourInit + ":" + minInit + ":" + secInit + ")");
        $("#timeInputForm").toggle();
        $("#timeSaved").toggle();
        $("#editTime").toggle();
    });
    $("#hourInput").on("change paste keyup", function () {
        errorCheck(parseInt($("#hourInput").val()), 2);
    });
    $("#minInput").on("change paste keyup", function () {
        errorCheck(parseInt($("#minInput").val()), 59);
    });
    $("#secInput").on("change paste keyup", function () {
        errorCheck(parseInt($("#secInput").val()), 59);
    });
    $("#startTimer").on("click", function () {
        bell = true;
        check();
    });
    $("#resetTimer").on("click", function () {
        hourInit = 0;
        minInit = 0;
        secInit = 0;
        bell = false;
        showTime();
        $("#timeSaved").text("Time: (0:00:00)");
        $("#timeInputForm").hide();
        $("#timeSaved").show();
        $("#editTime").show();
        $("#msg").html("");

    });
    $("#timeInputForm").hide();
    $("#editTime").on("click", function () {
        // $(".para1").hide();
        $("#timeInputForm").toggle();
        $("#timeSaved").toggle();
        $("#editTime").toggle();
    });

});
// });