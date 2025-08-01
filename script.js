const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("phone_menu");
const sidebarList = document.getElementById("navLinks");
const dropdownMenu = document.getElementById("dropdownMenu");
const carret = document.getElementById("carret");
const eventsList = document.getElementById("eventsList").children;
const eventPoster = document.getElementById("eventPoster");

function menubar() {
  const isClosed = sidebar.style.width == "0vw";
  //hamburger.classList[isClosed ? "add" : "remove"]("menu-active");
  sidebar.style.width = isClosed ? "72vw" : "0vw";
  sidebarList.style.opacity = isClosed ? "1" : "0";
  sidebarList.style.marginLeft = isClosed ? "20px" : "0";
  document.body.style.overflow = isClosed ? "hidden" : "scroll";
  filter.style.opacity = isClosed ? "1" : "0";
  filter.style.pointerEvents = isClosed ? "all" : "none";
}

function dropdown() {
  dropdownMenu.style.height =
    dropdownMenu.style.height == "0px" ? "160px" : "0px";
  dropdownMenu.style.opacity = dropdownMenu.style.height == "0px" ? "0" : "1";
  carret.style.rotate = dropdownMenu.style.height == "0px" ? "0deg" : "-180deg";
}

function activeEventSwitch(x) {
  if (window.innerWidth >= 560) {
    eventsList[0].classList.remove("activeEvent");
    eventsList[1].classList.remove("activeEvent");
    eventsList[x].classList.add("activeEvent");
    eventPoster.src = `pics/Exempel${x}.jpg`;
    return;
  }

  if (eventsList[x].classList.contains("activeEventBttn")) {
    eventsList[x].classList.remove("activeEventBttn");
    eventsList[x].children[1].style.height = "0px";
  } else {
    Array.from(eventsList).forEach((el) => (el.className = ""));
    eventsList[0].children[1].style.height = "0px";
    eventsList[1].children[1].style.height = "0px";
    eventsList[x].classList.add("activeEventBttn");
    eventsList[x].children[1].style.height =
      eventsList[x].children[1].scrollHeight - 12 + "px";
  }
}