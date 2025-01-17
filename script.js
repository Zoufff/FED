// JavaScript Document

console.log("hiiii");

var menubutton = document.querySelector("header ul:nth-child(3) button");

var menu = document.querySelector("nav");

menubutton.onclick = openMenu;

function openMenu() {
menu.classList.add("toonMenu");
  console.log("menu is open");
}

/* SLUIT MENU */

var menusluitbutton = document.querySelector("nav button");

menusluitbutton.onclick = sluitMenu;

function sluitMenu() {
  menu.classList.remove("toonMenu");
  console.log("menu is gesloten");
}