
var textSize = 18;
var headerSize = 40;
var currentColor = "white"
var fontSizeCounter = 1;


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

function changefontSize() {
    let button = document.getElementById("fontSize");
    if( fontSizeCounter == 1 ) { changeFontSize(1.5); fontSizeCounter++; button.innerHTML = "Increase text-size"; toggleColumnView(1000); toggleGrid("fullView"); }
    else if( fontSizeCounter == 2 ) { changeFontSize(2.0); fontSizeCounter++; button.innerHTML = "Decrease text-size"; toggleGrid("fullView"); }
    else { changeFontSize(1.0); fontSizeCounter = 1; button.innerHTML = "Increase text-size"; toggleColumnView(300); toggleGrid("normalView"); }
}

function changeColor() {
    let button = document.getElementById("contrast");
    if ( currentColor == "white") {
        currentColor = "black"
        document.body.style.background = "black";
        button.innerHTML = "Contrast: White";

        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                if( item.className.split(" ")[0] == "playerbtn" || item.id == "contrast" || item.id == "fontSize") {
                    item.style.color = "rgb(24,23,23)";
                    item.style.background = "white";
                }else {
                    document.getElementsByTagName("footer")[0].firstChild.style.color = "white";
                    document.getElementsByTagName("footer")[0].style.background = "black";
                    item.style.color = "white";
                }
            }
        });
        var buttons = document.getElementsByTagName("button");
        for(var i=0; i<buttons.length; i++) {
            buttons[i].style.color = "rgb(24,23,23)";
        }
    }
    else {
        document.body.style.background = "white";
        currentColor = "white";
        button.innerHTML = "Contrast: Black";

        let x = document.body.querySelectorAll("*");
        x.forEach(function(item) {
            if(item.id != "logo") {
                if( item.className.split(" ")[0] == "playerbtn" || item.id == "contrast" || item.id == "fontSize"){
                    item.style.color = "white";
                    item.style.background = "rgb(24,23,23)";
                }else {
                    document.getElementsByTagName("footer")[0].firstChild.style.color = "rgb(24,23,23)";
                    document.getElementsByTagName("footer")[0].style.background = "white";
                    item.style.color = "rgb(24,23,23)";
                }
            }
        });
    }
}

function toggleColumnView(pixelSize){
  let x = document.body.querySelectorAll("section");
  x.forEach(function(item) {
    if(item.id != "videocontainer"){
      if (item.id == "product" && pixelSize < 500){
        item.style.columnWidth = "400px";
      } else if (item.id == "product" && pixelSize > 500){
        item.style.columnWidth = pixelSize + "px";
      } else {
        item.style.columnWidth = pixelSize + "px";
      }
    }
  })
}

window.onload = function() {
    var list_elements = document.getElementsByClassName("link");
    for(var i=0; i<list_elements.length; i++){
        list_elements[i].addEventListener("mouseover", function() {
            this.style.color = "red";
        });
    }
    for(var i=0; i<list_elements.length; i++){
        list_elements[i].addEventListener("mouseleave", function() {
            if ( currentColor == "white") {
                this.style.color = "rgb(24,23,23)";
            }
            else {
                this.style.color = "white";
            }
        });
    }
}

function toggleGrid(mode) {
    var header = document.getElementsByTagName("header")[0];
    var article = header.getElementsByTagName("article")[0];
    var figure = header.getElementsByTagName("figure")[0];
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    document.body.addEventListener("resize", function(){
        if( w > 1024 ) {
            figure.classList.remove("figure_toggleGrid_fullView");
            article.classList.remove("article_toggleGrid_fullView");
        }
    })
    if( w > 1024 ){
        if(article.nodeName == "ARTICLE" && figure.nodeName == "FIGURE" && mode == "fullView" ) {
            figure.classList.add("figure_toggleGrid_fullView");
            article.classList.add("article_toggleGrid_fullView");
        }
        else if(article.nodeName == "ARTICLE" && figure.nodeName == "FIGURE" && mode == "normalView" ) {
            figure.classList.remove("figure_toggleGrid_fullView");
            article.classList.remove("article_toggleGrid_fullView");
        }
    }
}