function sidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "0";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.display = "block";
  sideblur.style.backdropFilter = "brightness(50%)";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.display = "none";
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
}
function nosidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "-25%";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.display = "none";
  sideblur.style.backdropFilter = "brightness(100%)";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.display = "grid";
  let body = document.querySelector("body");
  body.style.overflow = "scroll";
}
window.addEventListener("load", adjustHeroTextHeight);
window.addEventListener("resize", adjustHeroTextHeight);
function adjustHeroTextHeight() {
  const Hero = document.getElementsByClassName("hero")[0];
  const HeroText = document.getElementsByClassName("hero-text")[0];
  const HeroHeight = Hero.offsetHeight;
  HeroText.style.height = HeroHeight + "px";
}
setInterval(() => {
  AutoScrollQuote(quoteContainer, quoteContainerWidth);
}, 30000);
const quoteContainer = document.getElementsByClassName("quote-container")[0];
const quoteContainerWidth = Math.round(screen.width / 4);
function previousQuote(quoteContainer, quoteContainerWidth) {
  quoteContainer.scrollBy({ left: -quoteContainerWidth, behavior: "smooth" });
}
function nextQuote(quoteContainer, quoteContainerWidth) {
  quoteContainer.scrollBy({ left: quoteContainerWidth, behavior: "smooth" });
}
function autoScrollQuote(quoteContainer, quoteContainerWidth) {
  const maxScrollLeft = quoteContainer.scrollWidth - quoteContainer.clientWidth;
  const currentScrollLeft = quoteContainer.scrollLeft;

  if (currentScrollLeft < maxScrollLeft) {
    quoteContainer.scrollBy({ left: quoteContainerWidth, behavior: "smooth" });
  } else {
    quoteContainer.scrollLeft = 0;
  }
}
function AutoScrollQuote(quoteContainer, quoteContainerWidth) {
  if (quoteContainer) {
    autoScrollQuote(quoteContainer, quoteContainerWidth);
  }
}
