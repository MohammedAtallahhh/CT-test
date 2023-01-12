const tabsSection = document.querySelector(".tabs-section");
const tabs = document.querySelector(".tabs");
const tabContents = document.querySelector(".tab-contents");

const sliderContainer = document.querySelector(".slider__inner");
const slider = document.querySelector(".slider__inner .slides");

const accordion = document.querySelector(".accordion");

let activeSlideIndex = 2;

const handleTabs = (e) => {
  if (e.target.closest(".tab")) {
    const currentTab = tabs.querySelector(".tab.active");
    const newActiveTab = e.target;

    const currentContent = tabContents.querySelector(".tab-content.active");
    const newActiveContent = tabContents.querySelector(
      `[data-index="${+newActiveTab.dataset.index}`
    );

    // activate current active tab
    currentTab.classList.remove("active");
    newActiveTab.classList.add("active");

    // Show the content accordingly
    currentContent.classList.remove("active");
    newActiveContent.classList.add("active");
  }
};

slider.style.translate = `-${+activeSlideIndex * 230}px`;

const handleSlider = (e) => {
  if (e.target.closest(".dot")) {
    const currentActiveDot = sliderContainer.querySelector(".dot.active");
    const newActiveDot = e.target;
    const index = newActiveDot.dataset.index;

    // Move the slider to the left by
    // the amount of the image width (220px) plus the gap (10px)
    slider.style.translate = `-${+index * 230}px`;

    // Activate the new dot
    currentActiveDot.classList.remove("active");
    newActiveDot.classList.add("active");
  }
};

const handleAccordion = (e) => {
  if (e.target.closest(".accordion-item__button")) {
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = 0;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "2rem";
    }
  }
};

const handleTabsAndAccordion = (e) => {
  if (window.innerWidth >= 768) {
    accordion.style.display = "none";
    tabsSection.style.display = "block";
  } else {
    accordion.style.display = "block";
    tabsSection.style.display = "none";
  }
};

// Showing Accordion on mobile and tabs on desktop
window.addEventListener("resize", handleTabsAndAccordion);
document.addEventListener("DOMContentLoaded", handleTabsAndAccordion);

tabs.addEventListener("click", handleTabs);
sliderContainer.addEventListener("click", handleSlider);
accordion.addEventListener("click", handleAccordion);
