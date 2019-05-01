function hide(className) {
    $("."+className).hide();
}

function show(className) {
    $("."+className).show();
}

// document.addEventListener("DOMContentLoaded", function(event) { 
//     var eng = document.getElementById("enTrig");
//     var fra = document.getElementById("frTrig");

//     eng.onclick = function(){
//         show("en");
//         hide("fr");
        
//         fra.style.cursor = "";
//         fra.style.color = "";
//         fra.style.fontWeight = "";

//         eng.style.cursor = "default";
//         eng.style.color = "#fff";
//         eng.style.fontWeight = "bold";
//     }
    
//     fra.onclick = function(){
//         show("fr");
//         hide("en");
        
//         eng.style.cursor = "";
//         eng.style.color = "";
//         eng.style.fontWeight = "";

//         fra.style.cursor = "default";
//         fra.style.color = "#fff";
//         fra.style.fontWeight = "bold";
//     }
//     hide("fr");

//     if (navigator.language.includes('fr')) {
//         show("fr");
//         hide("en");

//         fra.style.cursor = "default";
//         fra.style.color = "#fff";
//         fra.style.fontWeight = "bold";
//     } else {
//         hide("fr");

//         eng.style.cursor = "default";
//         eng.style.color = "#fff";
//         eng.style.fontWeight = "bold";
//     }
// });