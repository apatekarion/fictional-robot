let buy = document.querySelector(".showcase__cart");
// localStorage.setItem("counter", "0");
let cartCount = document.querySelector(".goods__counter");
cartCount.textContent = localStorage.getItem("counter");
if (cartCount.textContent === "" || cartCount.textContent === "0") {
  cartCount.style.display = "none";
} else {
  cartCount.style.display = "inline";
}

// TODO: duplicate items don't appear, need to add counter to name of id
buy.addEventListener("click", () => {
  let image = document.querySelector(".showcase__image").src;
  let title = document.querySelector(".showcase__header").textContent;
  let price = document.querySelector(".showcase__price").textContent;
  let id = document.querySelector(".showcase__block").id;
  // if (cartCount.textContent.length === 0) {
  //   cartCount.style.display = "none";
  // } else {
  //   cartCount.style.display = "inline";
  // }
  let info = {
    imageInfo: image,
    titleInfo: title,
    priceInfo: price,
    idInfo: id,
  };
  let counter = Number(localStorage.getItem("counter"));
  counter += 1;
  localStorage.setItem(`id${counter}`, JSON.stringify(info));
  localStorage.setItem("counter", counter.toString());
  let numCounter = Number(localStorage.getItem("counter"));
  cartCount.textContent = numCounter.toString();
  cartCount.style.display = "inline";
});
