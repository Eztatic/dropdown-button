function setDropdownClick(button, content) {
  const dropdownButton = document.querySelector(button);
  const dropdownContent = document.querySelector(content);

  const elDisplay = window.getComputedStyle(dropdownContent).display;

  dropdownContent.style.display = "none";

  dropdownButton.addEventListener("click", () => {
    if (window.getComputedStyle(dropdownContent).display === "none") {
      dropdownContent.style.display = elDisplay;
    } else {
      dropdownContent.style.display = "none";
    }
  });

  window.addEventListener("click", (event) => {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });
}

// Dropdown Buttons Onclick
setDropdownClick(".dropdown-btn2", ".dropdown-content2");

function setDropdownHover(button, content) {
  const dropdownButton = document.querySelector(button);
  const dropdownContent = document.querySelector(content);

  const elDisplay = window.getComputedStyle(dropdownContent).display;

  dropdownContent.style.display = "none";

  dropdownButton.addEventListener("mouseover", () => {
    if (window.getComputedStyle(dropdownContent).display === "none") {
      dropdownContent.style.display = elDisplay;
    }
  });

  window.addEventListener("mouseover", (event) => {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });
}

// Dropdown Buttons Hover
setDropdownHover(".dropdown-btn1", ".dropdown-content1");
