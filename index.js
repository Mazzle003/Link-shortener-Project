menuIcon.addEventListener("click", () => {
  // const hasNoHidden = menuIcon.classList.contains("hidden");
  // console.log(hasNoHidden);

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



