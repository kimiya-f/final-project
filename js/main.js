
const themeButton = document.getElementById("theme-toggle");

if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
}

if (themeButton) {
  themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
}

// grab the modal, the X button, and all the class cards
var modal = document.getElementById("class-modal");
var span = document.querySelector(".close");
var cards = document.querySelectorAll(".class-card");

// when you click a card, pull its info and show it in the modal
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    document.getElementById("modal-title").textContent = card.querySelector("h3").textContent;
    document.getElementById("modal-description").textContent = card.querySelector("p").textContent;
    document.getElementById("modal-details").innerHTML = card.querySelector(".class-details").innerHTML;
    modal.style.display = "block";
  });
});

// close the modal when you click the X
span.onclick = function() {
  modal.style.display = "none";
}

// also close it if you click outside the modal box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// grab the filter buttons and all the cards
var filterButtons = document.querySelectorAll(".filter-btn");
var classCards = document.querySelectorAll(".class-card");

// wait for a click on each filter button
filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // remove the active highlight from all buttons first
    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    // then highlight just the one that was clicked
    this.classList.add("active");

    // check which filter was clicked
    var filter = this.getAttribute("data-filter");

    // show or hide each card depending on whether it matches
    classCards.forEach(function(card) {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
