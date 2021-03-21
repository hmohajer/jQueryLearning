// I can start a 25 minute, and the timer will go off once 25 minutes has elapsed.
// I can reset the clock for my next.
// I can customize the length of each time.
// I can get a sound notification when the time is finished.


//  To Do
//  -make the visual page
//      -big number counters
//      -when i click the Edit i get 3 input to change the value
//          -check not more than 2h    59m     59s and not less than 0//      -on the top of each input thae is a lablel hour minutes seconds
//      -when i start the start button change to stop or pause
//      -
//  -make three nested loop top: hours middel: minutes inside: seconds---- didnt work
//  -i can use secons of time of the computer the diff it makes ------didnt work
//  -make some function to 
//          -show the number on screen
//          -control the numbers  if sec is 0 make min 1 less and for hour too
//          -a function to check the numbers 


// for (let i = 0; i < 10; i++) {
//     setTimeout(function(){
//         }, 5000);
// }
// var cancel = setInterval(showSeconds, 1000);
// let seconds = new Date().getTime() / 1000;
// console.log(Math.floor(seconds));



$(document).ready(function () {

    let hourInit;
    let minInit;
    let secInit;
    let bell = true;

    // MINSEC => each minute have 60 seconds and each hour have 60 minutes (0 to 59 = 60)
    const MINSEC = 59;

    //show the numbers in counter on screen
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

    //-control the numbers  if sec is 0 make min 1 less and for hour too
    // function timerControler() {
    const timerControler = function () {
        //     //if sec > 0 then count seconds from initial
        //     //else if min > 0 then min-- then count sec from 59
        //     //else if hour > 0 then hour-- then min=59 then count sec from 59
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
    // chacking the input time that is not negetive and is not more than 59 for second and minutes and not more than 24
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


    // this function call recursively to count the seconds every one second
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

    //save the input recieved from user in edit button
    $("#timeInputSave").on("click", function () {
        hourInit = parseInt($("#hourInput").val());
        minInit = parseInt($("#minInput").val());
        secInit = parseInt($("#secInput").val());
        $("#timeSaved").text("Time: (" + hourInit + ":" + minInit + ":" + secInit + ")");
        $("#timeInputForm").toggle();
        $("#timeSaved").toggle();
        $("#editTime").toggle();
    });

    // to check that user enter the correct input (just warning no prevention yet)
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

    //reset the timer
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

    // open and close input form
    $("#timeInputForm").hide();
    $("#editTime").on("click", function () {
        // $(".para1").hide();
        $("#timeInputForm").toggle();
        $("#timeSaved").toggle();
        $("#editTime").toggle();
    });

});