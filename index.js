// OPENING AND CLOSING MENU DROPDOWN WITH ANIMATION
menuIcon.addEventListener("click", () => {
  //   open menu
  menuIcon.classList.add("hidden");
  menuCloseIcon.classList.remove("hidden");

  dropdown.classList.remove(
    "opacity-0",
    "-translate-y-2",
    "scale-[0.98]",
    "pointer-events-none",
    "invisible",
    "max-h-0",
  );
  dropdown.classList.add(
    "opacity-100",
    "translate-y-0",
    "scale-100",
    "visible",
    "max-h-[40rem]",
    "duration-800",
    "p-[4rem]",
  );

  // close menu
  menuCloseIcon.addEventListener("click", () => {
    menuIcon.classList.remove("hidden");
    menuCloseIcon.classList.add("hidden");

    dropdown.classList.add(
      "opacity-0",
      "-translate-y-2",
      "scale-[0.98]",
      "pointer-events-none",
      "invisible",
      "max-h-0",
      "duration-400",
    );
    dropdown.classList.remove(
      "opacity-100",
      "translate-y-0",
      "scale-100",
      "visible",
      "max-h-[40rem]",
      "duration-800",
      "p-[4rem]",
    );
  });
});

// ASKING USERS TO ADD A LINK IF THE INPUT IS EMPTY AND BUTTON CLICKED
shortenIt.addEventListener("click", () => {
  const inputValue = inputForm.value;

  if (inputValue) {
    // if theres a link inputed by the user
    inputForm.classList.remove("border-2", "border-[#f46262]");
    addLinkText.classList.add("opacity-0", "invisible", "max-h-0");
    addLinkText.classList.remove("opacity-100", "visible", "mt-[0.5rem]");
  } else {
    // if theres no link inputed by the user
    inputForm.classList.add("border-2", "border-[#f46262]");
    addLinkText.classList.remove("opacity-0", "invisible", "max-h-0");
    addLinkText.classList.add("opacity-100", "visible", "mt-[0.5rem]");
  }
});
