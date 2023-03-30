// Nav Link 1
const navItem = document.getElementById("nav-item-1");
const navLinkOne = document.getElementById("nav-link-1");
const subLinks = document.querySelector(".nav-item-1");

navLinkOne.addEventListener("mouseenter", () => {
  navItem.setAttribute("visited", "true");
});

navLinkOne.addEventListener("click", () => {
  const visited = navItem.getAttribute("visited") === "true";
  navItem.setAttribute("visited", visited ? "false" : "true");
});

// Add mouseleave event listener to both the main nav link and the sublinks
navLinkOne.addEventListener("mouseleave", handleMouseLeave);
subLinks.addEventListener("mouseleave", handleMouseLeave);

function handleMouseLeave(event) {
  // Check if the mouse has left both the main nav link and the sublinks
  if (
    !navLinkOne.contains(event.relatedTarget) &&
    !subLinks.contains(event.relatedTarget)
  ) {
    navItem.setAttribute("visited", "false");
  }
}

// Nav Link 2
const navItem2 = document.getElementById("nav-item-2");
const navLinkTwo = document.getElementById("nav-link-2");
const subLinks2 = document.querySelector(".nav-item-2");

navLinkTwo.addEventListener("mouseenter", () => {
  navItem2.setAttribute("visited", "true");
});
navLinkTwo.addEventListener("click", () => {
  const visited = navItem2.getAttribute("visited") === "true";
  navItem2.setAttribute("visited", visited ? "false" : "true");
});

// Add mouseleave event listener to both the main nav link and the sublinks
navLinkTwo.addEventListener("mouseleave", handleMouseLeave2);
subLinks2.addEventListener("mouseleave", handleMouseLeave2);

function handleMouseLeave2(event) {
  // Check if the mouse has left both the main nav link and the sublinks
  if (
    !navLinkTwo.contains(event.relatedTarget) &&
    !subLinks2.contains(event.relatedTarget)
  ) {
    navItem2.setAttribute("visited", "false");
  }
}

// Nav Link 3
const navItem3 = document.getElementById("nav-item-3");
const navLinkThree = document.getElementById("nav-link-3");
const subLinks3 = document.querySelector(".nav-item-3");

navLinkThree.addEventListener("mouseenter", () => {
  navItem3.setAttribute("visited", "true");
});

// Add mouseleave event listener to both the main nav link and the sublinks
navLinkThree.addEventListener("mouseleave", handleMouseLeave3);
subLinks3.addEventListener("mouseleave", handleMouseLeave3);

navLinkThree.addEventListener("click", () => {
  const visited = navItem3.getAttribute("visited") === "true";
  navItem3.setAttribute("visited", visited ? "false" : "true");
});

function handleMouseLeave3(event) {
  // Check if the mouse has left both the main nav link and the sublinks
  if (
    !navLinkThree.contains(event.relatedTarget) &&
    !subLinks3.contains(event.relatedTarget)
  ) {
    navItem3.setAttribute("visited", "false");
  }
}

// Nav Link 3
const navItem4 = document.getElementById("nav-item-4");
const navLinkFour = document.getElementById("nav-link-4");
const subLinks4 = document.querySelector(".nav-item-4");

navLinkFour.addEventListener("mouseenter", () => {
  navItem4.setAttribute("visited", "true");
});

// Add mouseleave event listener to both the main nav link and the sublinks
navLinkFour.addEventListener("mouseleave", handleMouseLeave4);
subLinks4.addEventListener("mouseleave", handleMouseLeave4);

navLinkFour.addEventListener("click", () => {
  const visited = navItem4.getAttribute("visited") === "true";
  navItem4.setAttribute("visited", visited ? "false" : "true");
});

function handleMouseLeave4(event) {
  // Check if the mouse has left both the main nav link and the sublinks
  if (
    !navLinkFour.contains(event.relatedTarget) &&
    !subLinks4.contains(event.relatedTarget)
  ) {
    navItem4.setAttribute("visited", "false");
  }
}
