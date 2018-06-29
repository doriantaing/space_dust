var p1 = document.getElementById("client1");
var p2 = document.getElementById("client2");
var p3 = document.getElementById("client3");

var line = document.querySelector(".headeruser__line-inner");
var tabs = document.querySelectorAll(".headeruser__tabs-item");
var pages = document.querySelectorAll(".page");

var startingX;
var startingY;
var y;

function p1start(e) {
  startingX = e.touches[0].clientX;
  startingY = e.touches[0].clientY;
}

function p1move(e) {
  var touch = e.touches[0];
  var change = startingX - touch.clientX;
  y = startingX - touch.clientY;
  var half = screen.width / 5;

  console.log("y:" + y + "half:" + half);
    console.log("x:" + change + "half:" + half);


    if (change < 0) {
    return;
  }
  if (y < -half && change < 50){
      return;
  }
  p1.style.left = "-" + change + "px";
  p2.style.display = "block";
  p2.style.left = screen.width - change + "px";
  e.preventDefault();
}

function p1end(e) {
  var change = startingX - e.changedTouches[0].clientX;
  var half = screen.width / 5;
  if (change < half) {
    p1.style.left = 0;
    p2.style.left = "100%";
    p2.style.display = "none";
  } else {
    p1.style.left = "-100%";
    p2.style.left = "0";
    p2.style.display = "block";
    p1.style.display = "none";
    line.classList.remove("line1");
    line.classList.add("line2");
  }
}

function p2start(e) {
  startingX = e.touches[0].clientX;
  p1.style.transition = "";
  p2.style.transition = "";
  p1.style.display = "none";
}

function p2move(e) {
  var touch = e.touches[0];
  var change = touch.clientX - startingX;
    var half = screen.width / 5;


  if (change < 0) {
    p3.style.display = "block";
    p3.style.left = change + screen.width + "px";
    p2.style.left = change - "px";
  }
  p1.style.display = "block";
  p1.style.left = change - screen.width + "px";
  p2.style.left = change + "px";
  e.preventDefault();
}

function p2end(e) {
    var change = e.changedTouches[0].clientX - startingX;
  var half = screen.width / 5;
  if (change < half) {
    p1.style.left = "-200%";
    p1.style.display = "none";
    p2.style.display = "none";
    p2.style.left = "-100%";
    p3.style.left = "0";
    line.classList.remove("line2");
    line.classList.add("line3");
  } else {
    p1.style.left = "0";
    p2.style.left = "100%";
    p2.style.display = "none";
    line.classList.remove("line2");
    line.classList.add("line1");
  }
}

function p3start(e) {
  startingX = e.touches[0].clientX;
  p2.style.transition = "";
  p3.style.transition = "";
  p2.style.display = "none";
}

function p3move(e) {
  var touch = e.touches[0];
  var change = touch.clientX - startingX;
    y = startingX - touch.clientY;
    var half = screen.width / 5;
    if (y < -half && change < 50){
        return;
    }

    if (change < 0) {
    return;
  }
  p2.style.display = "block";
  p2.style.left = change - screen.width + "px";
  p3.style.left = change + "px";
  e.preventDefault();
}

function p3end(e) {
  var change = e.changedTouches[0].clientX - startingX;
  var half = screen.width / 5;
  if (change < half) {
    p2.style.left = "-100%";
    p2.style.display = "none";
  } else {
    p2.style.left = "0";
    p3.style.left = "100%";
    p3.style.display = "none";
    line.classList.remove("line3");
    line.classList.add("line2");
  }
}

function clickTabs(e) {
  var num = e.target.className.split(" ")[1];
  console.log(num);
  for (var i = 0; i < tabs.length; i++) {
    pages[i].style.display = "none";
    tabs[i].classList.remove("activeHeaderUser");
  }
  if (num == 0) {
    p3.style.left = "200%";
    p2.style.left = "100%";
    p1.style.left = "0";
    pages[num].style.display = "block";
    var activeLine = line.className.split(" ")[1];
    line.classList.remove(activeLine);
    line.classList.add("line1");
    tabs[0].classList.add("activeHeaderUser");
    // for (var i = 0; i < tabs.length; i++) {
    // }
  } else if (num == 1) {
    p3.style.left = "100%";
    p2.style.left = "0";
    p1.style.left = "-100%";
    pages[num].style.display = "block";
    line.classList.add("line2");
    var activeLine = line.className.split(" ")[1];
    line.classList.remove(activeLine);
    line.classList.add("line2");
    tabs[1].classList.add("activeHeaderUser");
  } else {
    p3.style.left = "0";
    p2.style.left = "-100%";
    p1.style.left = "-200%";
    pages[num].style.display = "block";
    line.classList.add("line3");
    var activeLine = line.className.split(" ")[1];
    line.classList.remove(activeLine);
    line.classList.add("line3");
    tabs[2].classList.add("activeHeaderUser");
  }
}

//user devis
let userDevis = document.querySelector(".userDevis__inner");

userDevis.addEventListener("touchstart", e => {
  p2start(e);
});
userDevis.addEventListener("touchmove", e => {
  p2move(e);
});
userDevis.addEventListener("touchend", e => {
  p2end(e);
});
