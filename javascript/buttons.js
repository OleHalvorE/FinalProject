
var textSize = "20";
var headerSize = "40";
var currentColor = "white"

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
    if ( currentColor == "white") {
        currentColor = "black"
        document.body.style.background = "black";
        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                if( item.className.split(" ")[0] == "playerbtn" ) {
                    item.style.color = "rgb(24,23,23)";
                    item.style.background = "white";
                }
                else {
                    item.style.color = "white";
                }
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
        currentColor = "white";
        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                if( item.className.split(" ")[0] == "playerbtn" ){
                    item.style.color = "white";
                    item.style.background = "rgb(24,23,23)";
                }
                else {
                    item.style.color = "rgb(24,23,23)";
                }
            }
        });
    }
}

var list_elements = document.getElementsByTagName("nav").firstChild;
for(li in list_elements){
    alert("dasdsa");
    li.firstChild.addEventListener("click", function() {
        alert("dasdsa");
    });
}
window.onload = function() {
    var list_elements = document.getElementsByTagName("nav").firstChild;
    for(li in list_elements){
        console.log(li.nodeValue);
        li.firstChild.addEventListener("click", function() {
            alert("dasdsa");
        });
    }
}
document.getElementsByTagName("NAV")[0].childNodes[0].addEventListener("mouseover", function(){
    this.background = "green";
});
document.getElementsByTagName("NAV")[0].firstChild.addEventListener("mouseout", function(){
    this.background = "green";
}); 