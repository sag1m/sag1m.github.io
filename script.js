// Get the dark mode toggle button
const toggleButton = document.getElementById("dark-mode-toggle");

// Get the link element of the CSS file
const styleLink = document.getElementById("style-link");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function() {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");

  // Toggle the "disabled" attribute on the link element of the CSS file
  if (styleLink.disabled) {
    styleLink.disabled = false;
  } else {
    styleLink.disabled = true;
  }
});
