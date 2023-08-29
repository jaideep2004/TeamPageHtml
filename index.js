function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topbar") {
      x.className += " responsive";
    } else {
      x.className = "topbar";
    }
  }