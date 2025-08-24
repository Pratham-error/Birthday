const yesBtn = document.getElementById("yesBtn");
const overlay = document.getElementById("overlay");
const main = document.getElementById("main");

yesBtn.addEventListener("click", () => {
  overlay.classList.add("fade");
  setTimeout(() => {
    overlay.style.display = "none";
    main.style.display = "block";
  }, 1000);
});

// Envelope click
const envelopes = document.querySelectorAll(".envelope");
const modal = document.getElementById("letterModal");
const letterText = document.getElementById("letterText");
const closeModal = document.getElementById("closeModal");

envelopes.forEach(env => {
  env.addEventListener("click", () => {
    const message = env.getAttribute("data-message");
    letterText.textContent = message;
    modal.style.display = "block";
  });
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("envelope1").addEventListener("click", () => {
  alert("Letter 1: Happy Birthday!! 💖");
});

document.getElementById("envelope2").addEventListener("click", () => {
  alert("Letter 2: Wishing you lots of love 🎂");
});

document.getElementById("envelope3").addEventListener("click", () => {
  alert("Letter 3: You’re the best 🥳");
});



