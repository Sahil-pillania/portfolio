console.log("connected");
window.onload = function () {
  var navBar = document.getElementById("nav");
  var button = document.getElementById("toggler");
  var black = document.getElementById("black");

  // console.log(navBar);
  // console.log(button);

  button.addEventListener("click", () => {
    navBar.classList.toggle("active");
    black.classList.toggle("active");
    //   alert("clicked");
  });
};

black.addEventListener("click", () => {
  navBar.classList.toggle("active");
  black.classList.toggle("active");
});
