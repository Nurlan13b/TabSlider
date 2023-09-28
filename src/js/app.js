function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
  }
  let currentSlide = 0;
const slides = document.querySelectorAll('.slider-content img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize by showing the first slide
showSlide(currentSlide);

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();

//   if (taskText !== "") {
//       const taskList = document.getElementById("taskList");
//       const listItem = document.createElement("li");
//       listItem.textContent = taskText;
//       taskList.appendChild(listItem);

//       taskInput.value = "";
//   }
// }



