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
//  -make three nested loop top: hours middle: minutes inside: seconds---- didnt work
//  -i can use secons of time of the computer the diff it makes ------didnt work
//  -make some function to 
//          -show the number on screen
//          -control the numbers  if sec is 0 make min 1 less and for hour too
//          -a function to check the numbers 


// for (let i = 0; i < 10; i++) {
//     setTimeout(function(){
//         }, 5000);
// }
// var cancelInterval = setInterval(showSeconds, 1000);
// let seconds = new Date().getTime() / 1000;
// console.log(Math.floor(seconds));



$(document).ready(function () {
    
    let hourInit;
    let minInit;
    let secInit;
    let bell = true;
    let isCounting = false;
    var cancelInterval;

    // MINSEC => each minute have 60 seconds and each hour have 60 minutes (0 to 59 = 60)
    const MINSEC = 59;
    const HRS = 24; //one day 24 hours

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
            } else if (bell) {
            //play a sound
            $("#finishAudio")[0].play();
            clearInterval(cancelInterval);
            console.log("bling bling bling bling!");
            isCounting = false;
        }

    }
    // chacking the input time that is not negetive and is not more than 59 for second and minutes and not more than 24
    function errorCheck(val, upTo) {
        if (val < 0 || val > upTo) {
            $("#msg").html("Please put a number between 0 to " + upTo + "(inclusive)");
            setTimeout(() => $("#msg").html(""), 4000);
        }
        if (val < 0) {
            val = 0;
        }else if ( val > upTo) {
            val = upTo;
        }
        return val;
    }

    // this function call recursively to count the seconds every one second
    var startTimer = function () {
        cancelInterval = setInterval(timerControler, 1000);
    }
    function getInput(){
        if(isCounting === false){
            hourInit = parseInt($("#hourInput").val());
            minInit = parseInt($("#minInput").val());
            secInit = parseInt($("#secInput").val());
        }
        $("#timeSaved").text("Time: (" + parseInt($("#hourInput").val()) + ":" + parseInt($("#minInput").val()) + ":" + parseInt($("#secInput").val()) + ")");
        $("#timeInputForm").hide();
        $("#timeSaved").show();
        $("#editTime").show();
    }
    //save the input recieved from user in edit button
    $("#timeInputSave").on("click", function () {
        getInput();
    });

    // to check that user enter the correct input (just warning no prevention yet)
    $("#hourInput").on("change paste keyup", function () {
        $("#hourInput").val(errorCheck(parseInt($("#hourInput").val()), HRS));
    });
    $("#minInput").on("change paste keyup", function () {
        $("#minInput").val(errorCheck(parseInt($("#minInput").val()), MINSEC));
    });
    $("#secInput").on("change paste keyup", function () {
        $("#secInput").val(errorCheck(parseInt($("#secInput").val()), MINSEC));
    });
    $("#startTimer").on("click", function () {
        if(isCounting === false){
            getInput();
            bell = true;
            isCounting = true;
            startTimer();
        }
    });

    //reset the timer
    $("#resetTimer").on("click", function () {
        hourInit = 0;
        minInit = 0;
        secInit = 0;
        bell = false;
        isCounting = false;
        clearInterval(cancelInterval);
        showTime();
        $("#timeSaved").text("Time: (0:00:00)");
        $("#timeInputForm").hide();
        $("#timeSaved").show();
        $("#editTime").show();
        $("#msg").html("");
        $("#hourInput").val("00");
        $("#minInput").val("00");
        $("#secInput").val("00");
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