"use strict";

const share = document.querySelector(".share-btn");
const icon = share.querySelector(".share-icon");

document.addEventListener("click", function (e) {
  const popUp = share.closest(".share").querySelector(".pop-up");

  if (e.target !== popUp && !popUp.classList.contains("pop-up--hidden")) {
    popUp.classList.add("pop-up--hidden");
    popUp.classList.toggle("pop-up--animation");
    share.classList.toggle("share-btn--clicked");
    icon.classList.toggle("share-icon--clicked");
  } else if (e.target.closest(".share")?.querySelector(".pop-up")) {
    popUp.classList.toggle("pop-up--hidden");
    popUp.classList.toggle("pop-up--animation");
    share.classList.toggle("share-btn--clicked");
    icon.classList.toggle("share-icon--clicked");
  }
});
