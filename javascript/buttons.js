
var textSize = "20";
var headerSize = "40";

function changeFontSize(percent) {
    let x = document.body.querySelectorAll("*");
    x.forEach(function(item) {
        if (item.tagName == 'ARTICLE' || item.tagName == 'P' || item.tagName == 'A'){
            item.style.fontSize = textSize * percent + "px";
        }
        if (item.tagName == 'H1') {
            item.style.fontSize == headerSize * percent + "px";
        }
    });
}
function changeColor() {
    if ( document.body.style.background == "white none repeat scroll 0% 0%" || document.body.style.background  =="" ) {
        document.body.style.background = "black";
        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                item.style.color = "white";
            }
        });
        document.getElementsByTagName("footer")[0].firstChild.style.color = "rgb(24,23,23)";
        var buttons = document.getElementsByTagName("button");
        for(var i=0; i<buttons.length; i++) {
            buttons[i].style.color = "rgb(24,23,23)";
        }
    }
    else {
        document.body.style.background = "white";
        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                item.style.color = "rgb(24,23,23)";
            }
        });
    }
}