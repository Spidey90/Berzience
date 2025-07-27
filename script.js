const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("phone_menu");
const sidebarList = document.getElementById("navLinks");
const dropdownMenu = document.getElementById("dropdownMenu");
const carret = document.getElementById("carret");
const eventsList = document.getElementById("eventsList");
const events = eventsList.children;

function menubar() {
  const isClosed = sidebar.style.width == "0vw";
  //hamburger.classList[isClosed ? "add" : "remove"]("menu-active");
  sidebar.style.width = isClosed ? "72vw" : "0vw";
  sidebarList.style.opacity = isClosed ? "1" : "0";
  sidebarList.style.marginLeft = isClosed ? "32px" : "0";
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

function eventExpand(x) {
  events[0].classList.remove("activeEvent");
  events[1].classList.remove("activeEvent");
  events[x].classList.add("activeEvent")
}
