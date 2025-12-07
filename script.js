const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

  const form = document.getElementById("appointmentForm");
  const popup = document.getElementById("successPopup");
  const closeBtn = document.getElementById("closePopup");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop real submission
    popup.style.display = "flex"; // show popup
    form.reset(); // clear fields
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });


