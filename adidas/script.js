// up Arrow
let lastScrollY = 0;
window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");
  const uparrow = this.document.getElementById("uparrow");

  if (this.window.scrollY > 100) {
    if (lastScrollY > this.window.scrollY)
      navbar.classList.remove("nav-display");
    else navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }

  if (this.window.scrollY > 200) {
    gsap.to(".UpArrow", {
      opacity: 1,
      duration: 0.3,
    });
  } else {
    gsap.to(".UpArrow", {
      opacity: 0,
      duration: 0.3,
    });
  }

  lastScrollY = this.window.scrollY;
});

// gsap
// Menu sidebar Hiding and showing
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", function () {
  gsap.to(".sidebar", {
    x: "0%",
  });
});

const closeBtn = document.querySelector(".close-logo");
closeBtn.addEventListener("click", function () {
  gsap.to(".sidebar", {
    x: "-100%",
  });
});

// Search sidebar
const searchIconBtn = document.querySelector(".search-btn-sidebar");
const searchSidebar = document.querySelector(".search-sidebar");
const closeSearchSidebar = document.querySelector(".close-search-sidebar");

searchIconBtn.addEventListener("click", function () {
  gsap.to(".search-sidebar", {
    x: "0%",
  });
});

closeSearchSidebar.addEventListener("click", function () {
  gsap.to(".search-sidebar", {
    x: "100%",
  });
});

const searchSidebarInput = document.getElementById("searchSidebarInput");

// Add an event listener for the input event
const clearContent = document.querySelector(".clear-content");
searchSidebarInput.addEventListener("input", function () {
  var inputValue = searchSidebarInput.value;
  if (inputValue.length > 0) clearContent.style.display = "block";
});

clearContent.addEventListener("click", function () {
  searchSidebarInput.value = "";
  clearContent.style.display = "none";
});

// Sign up
const signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.remove("display");
  console.log("clicked");
});

const closebtnSignup = document.getElementById("close-btn-signup");
closebtnSignup.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.add("display");
});

const profile = document.getElementById("user-profile-nav");
profile.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.remove("display");
  console.log("clicked");
});

closebtnSignup.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.add("display");
});

// stripes
const crossStrips = document.querySelector(".stripes-close");
crossStrips.addEventListener("click", function () {
  const stripes = document.querySelector(".stripes");
  stripes.classList.add("stripe-dis");
});

// Black section heading change
let i = 0;
let data = [
  "sign up & get 15% off",
  "free delivery, free returns",
  "upi and net banking availabel",
];
const heading = document.querySelector(".black-header-data");
heading.textContent = data[0];

setInterval(() => {
  heading.textContent = data[i++];
  gsap.from(".black-header-data", {
    opacity: 0,
    duration: 0.3,
  });
  if (i == 3) i = 0;
}, 1500);
