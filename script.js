const mainHeight = document.getElementById("main");
const sidebar = document.getElementById("phone_menu");
const filter = document.getElementById("filter");
const sidebarList = document.getElementById("navLinks");
const header = document.getElementById("header")



function menubar() {
  sidebar.style.width = sidebar.style.width == "0vw" ? "72vw" : "0vw";
  sidebarList.classList[sidebar.style.width == "0vw" ? "remove" : "add"]("active");
  filter.style.opacity = sidebar.style.width == "0vw" ? "0" : "1";
}
