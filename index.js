const tabs = document.querySelector(".tabs");
const tabContents = document.querySelector(".tab-contents");

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

tabs.addEventListener("click", handleTabs);
