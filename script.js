const sidebar = document.getElementById("phone_menu");
const filter = document.getElementById("filter");
const sidebarList = document.getElementById("navLinks");
const dropdownMenu = document.getElementById("dropdownMenu");

function menubar() {
  const isClosed = Boolean(sidebar.style.width == "0vw");
  sidebar.style.width = isClosed ? "72vw" : "0vw";
  sidebarList.style.opacity = isClosed ? "1" : "0";
  sidebarList.style.marginLeft = isClosed ? "32px" : "0";
  document.body.style.overflow = isClosed ? "hidden" : "scroll";
  filter.style.opacity = isClosed ? "1" : "0";
}

function dropdown() {
  dropdownMenu.style.height = dropdownMenu.style.height == "0px" ? "120px" : "0px";
  dropdownMenu.style.opacity = dropdownMenu.style.height == "0px" ? "0" : "1";
}

/*
All font sizes
herosection default: 1.25 rem



*/ 
