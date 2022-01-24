let showAlert = (event) => {
  if (
    event.clientY <= 0 ||
    event.clientX <= 0 ||
    event.clientX >= window.innerWidth ||
    event.clientY >= window.innerHeight
  ) {
    console.log("I'm out!");
    window.alert("Still have questions? Book a time to speak to our team and find the right solution.");
    document.removeEventListener("mouseleave", showAlert);
  }
};

//try with async/await
// setTimeout(() => {
//     document.addEventListener("scroll", scrollSpeed);
//   }, 3000);

//   scrollSpeed = () => {
//     lastPosition = window.scrollY;
//     setTimeout(() => {
//     newPosition = window.scrollY;
//     }, 100);
//     currentSpeed = newPosition - lastPosition;
//     console.log(currentSpeed);

//     if (currentSpeed > 260) {
//       console.log("Exit intent popup triggered");
//       window.alert("Still have questions? Book a time to speak to our team and find the right solution.");
//       document.removeEventListener("scroll", scrollSpeed);
//     }
//   };

//modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  console.log("modal active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// //scroll speed
function myScrollSpeedFunction() {
  const delta = my_scroll();
  console.log(delta);

  if (delta < -80) {
    window.alert(
      "Still have questions? Book a time to speak to our team and find the right solution."
    );
    document.removeEventListener("scroll", myScrollSpeedFunction);
  }
}

const my_scroll = (() => {
  let last_position,
    new_position,
    timer,
    delta,
    delay = 4000;

  function clear() {
    last_position = null;
    delta = 0;
  }

  clear();

  return () => {
    new_position = window.scrollY;
    if (last_position != null) {
      delta = new_position - last_position;
    }

    last_position = new_position;
    clearTimeout(timer);

    timer = setTimeout(clear, delay);

    return delta;
  };
})();

const screenCheck = () => {
  if (window.screen.width < 1007) {
    document.addEventListener("scroll", myScrollSpeedFunction);
  } else {
    let timeoutId = setTimeout(() => {
      document.addEventListener("mouseleave", showAlert);
    }, 3000);
  }
};

screenCheck();

