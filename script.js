const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("menu");
const sidebarList = document.getElementById("navLinks");
const dropdownMenu = document.getElementById("dropdownMenu");
const carret = document.getElementById("carret");
const eventsList = document.getElementById("eventsList").children;
const eventPoster = document.getElementById("eventPoster");

function menubar() {
  const widthClosed = "-80dvw";
  const isClosed = sidebar.style.left == widthClosed;
  sidebar.style.left = isClosed ? "0dvw" : `${widthClosed}`;
  sidebarList.style.opacity = isClosed ? "1" : "0";
  sidebarList.style.marginLeft = isClosed ? "20px" : "0";
  document.body.style.overflow = isClosed ? "hidden" : "scroll";
  filter.style.opacity = isClosed ? "1" : "0";
  filter.style.pointerEvents = isClosed ? "all" : "none";
}

function activeEventSwitch(x) {
  if (window.innerWidth >= 560) {
    eventsList[0].classList.remove("activeEvent");
    eventsList[1].classList.remove("activeEvent");
    eventsList[x].classList.add("activeEvent");
    eventPoster.src = `pics/Exempel${x}.jpg`;
  }
}

function eventExpander(x) {
  if (window.innerWidth >= 560) {
    return;
  } else if (eventsList[x].classList.contains("activeEventBttn")) {
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
