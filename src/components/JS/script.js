console.log("connected");
window.onload = function () {
  var navBar = document.getElementById("nav");
  var button = document.getElementById("toggler");
  var black = document.getElementById("black");
  var w = window.innerWidth;
  console.log(w);

  // console.log(navBar);
  // console.log(black);

  button.addEventListener("click", () => {
    navBar.classList.toggle("active");
    black.classList.toggle("active");
    //   alert("clicked");
  });

  black.addEventListener("click", () => {
    navBar.classList.toggle("active");
    black.classList.toggle("active");
  });

  window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;

    if (newWidth > 720) {
      navBar.classList.remove("active");
      black.classList.remove("active");
    }
  });
};
