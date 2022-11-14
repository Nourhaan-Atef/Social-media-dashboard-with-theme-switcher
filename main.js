let btn = document.getElementById("btn");
let outside = document.querySelector(".outside");
let inside = document.querySelector(".inside");
let dark = document.querySelector(".right p");
let header = document.querySelector("h1");
let number = document.querySelectorAll(".number");
let card = document.querySelectorAll(".card");
let today = document.getElementById("today");
btn.addEventListener("click", function () {
  if (document.body.classList == "dark") {
    document.body.classList.remove("dark");
    document.body.setAttribute("class", "light");
    outside.style.justifyContent = "flex-end";
    document.body.style.background = "#fff";
    dark.style.color = "hsl(230, 17%, 14%)";
    inside.style.background = "#fff";
    header.style.color = "hsl(230, 17%, 14%)";
    today.style.color = "hsl(230, 17%, 14%)";

    number.forEach((element) => {
      element.style.color = "hsl(230, 17%, 14%)";
    });
    card.forEach((element) => {
      element.style.background = "hsl(227, 47%, 96%)";
    });
  } else if (document.body.classList == "light") {
    document.body.classList.remove("light");
    document.body.setAttribute("class", "dark");

    outside.style.justifyContent = "flex-start";
    document.body.style.background = "hsl(230, 17%, 14%)";
    today.style.color = "#fff";

    dark.style.color = "#fff";

    inside.style.background = "hsl(228, 28%, 20%)";
    header.style.color = "#fff";

    number.forEach((element) => {
      element.style.color = "hsl(227, 47%, 96%)";
    });
    card.forEach((element) => {
      element.style.background = "hsl(228, 28%, 20%)";
    });
  }
});
