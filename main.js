// Start Welcome Background Slider Section
let welcomeImgs = document.querySelectorAll(".welcome-bg");
let sliderBtns = document.querySelectorAll(".slider-btn");

sliderBtns.forEach((el, index) => {
  el.addEventListener("click", () => {
    // Set all buttons to lower opacity
    sliderBtns.forEach((element) => {
      element.style.opacity = "50%";
    });
    // Set all images to hidden state
    welcomeImgs.forEach((ele) => {
      ele.style.opacity = "0";
    });
    // Set clicked button to higher opacity
    sliderBtns[index].style.opacity = "75%";
    // Show selected image with transition
    welcomeImgs[index].style.opacity = "100%";
    welcomeImgs[index].style.transition = "opacity 0.5s ease-in";
  });
});
// End Welcome Background Slider Section

// Start Latest Posts Section
let postText = document.querySelectorAll(".post-body");
postText.forEach((el) => {
  // Store the original text
  let originalText = el.innerText;
  // length of text that will be shown on the screen
  let maxLength = 150;

  // Check if text exceeds the length
  if (originalText.length > maxLength) {
    let shortText =
      originalText.substr(0, maxLength) +
      "..." +
      `<i class="fa-solid fa-angles-right show-more" aria-label="Show more text"></i>`;
    el.innerHTML = shortText;
  }

  // Adding the property of show more to show the original text
  let showMore = document.querySelectorAll("i.show-more");
  showMore.forEach((more) => {
    more.addEventListener("click", (event) => {
      event.target.parentElement.innerHTML = originalText;
    });
  });
});

// End Latest Posts Section
