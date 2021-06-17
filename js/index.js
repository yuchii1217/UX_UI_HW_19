
console.log("your index.js file is loaded correctly!");
$(document).ready(function () {

    function fade() {
        $(".preloader").fadeOut("slow");
    }
    setTimeout(fade, 3000);
});

$("#navigation").on("click", function () {
    $("#navigation").animate({
        color: "pink",
        width: "20%",
    }, 1000);
});

$("#logo").hover(function () {
    $("#logo").animate({ right: "200px" });

});

$("#heroblock").hover(function () {
    $("#heroblock").css("background-color", "lightblue");
},
    function () {
        $("#heroblock").css("background-color", "pink");
    });


$(".subHeading").hover(function () {
    $(".subHeading").css("border-bottom", "5px solid lightblue");
    $(".subHeading").css("font-size", "25px");
    $(".subHeading").finish();
});

$(".headline").hover(function () {
    $(".headline").css(color, "pink");
});

$("#highlight").on("click", function () {
    $("#highlight").slideToggle();
});

$(".research").hover(function () {
    $(".research").animate({ right: '200px' })
},
    function () {
        $(".research").css("color", "pink");
    });


$(".footertitle").hover(function () {
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}