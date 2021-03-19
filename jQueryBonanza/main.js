$(document).ready(() => {
    $("#fadeOut").on("click", () => {
        $("#paraFade").fadeToggle(500, () =>{
            $("#fadeOut").addClass("w-50");
        }); 
    });
    $("#fadeOut").on("mouseenter" , function(){
        $("#fadeOut").removeClass("w-50");
    });
    $("#append").on("click", () => {
        $("#listAppend").append("<li class='list-group-item'>"+$("#nameInput").val()+" : "+$("#jobInput").val()+"</li>");
    });
    $("#showHide").on("click", () =>{
        $("#nameInput").fadeToggle(400);
        $("#jobInput").fadeToggle(400);
    });
    $("#changeColor").on("mousemove", () =>{
        $("#paraColor").css("color", "#"+Math.floor(Math.random() * 1000)+111)
        $("#paraColor").css("background", "#"+Math.floor(Math.random() * 1000)+111)
    });

});