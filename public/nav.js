const menu = document.getElementById("menu"),
  menuButton = document.getElementById("burger");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("opacity-0")) {
    menu.classList.remove("opacity-0");
    menu.classList.remove("pointer-events-none");
  } else {
     menu.classList.add("opacity-0");
     menu.classList.add("pointer-events-none");
  }
});
