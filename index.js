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
    shortenLink(inputValue);
  } else {
    // if theres no link inputed by the user
    inputForm.classList.add("border-2", "border-[#f46262]");
    addLinkText.classList.remove("opacity-0", "invisible", "max-h-0");
    addLinkText.classList.add("opacity-100", "visible", "mt-[0.5rem]");
  }
});


const short_key = "uv_ebe657cb78eb6b71daa551805448e684822f27923c6e5d2e"
const shortenLink = async (link) => {
  try {
    const response = await fetch("https://urlvanish.com/create_api.php", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${short_key}`,
      },
      body: JSON.stringify({
        originalUrl: link,
      }),
    });

    const data = await response.json();
    localStorage.setItem("shortenedLink", JSON.stringify(data));
    let newdata = JSON.parse(localStorage.getItem("shortenedLink"));
    let original_url = newdata.originalUrl;
    originurl.innerHTML = original_url.substring(0, 30) + "...";
    shorturl.innerHTML = newdata.shortUrl;
    return data;
  } catch (error) {
    console.error("Error shortening the link:", error);
    throw error;
  }
};

let newdata = JSON.parse(localStorage.getItem("shortenedLink"));
let original_url = newdata.originalUrl;
originurl.innerHTML = original_url.substring(0, 30) + "...";
shorturl.innerHTML = newdata.shortUrl;

copylink.addEventListener("click", () => {
  const shortUrl = shorturl.innerHTML;
  navigator.clipboard.writeText(shortUrl)
    .then(() => {
      copylink.innerHTML = "Copied!";
      copylink.classList.add("bg-[#3b3054]");
      setTimeout(() => {
        copylink.innerHTML = "Copy";
        copylink.classList.remove("bg-[#3b3054]");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error copying to clipboard:", error);
    });
});