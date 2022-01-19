// function allStorage() {
//   let values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;
//
//   while (i--) {
//     values.push(JSON.parse(localStorage.getItem(keys[i])));
//   }
//
//   return values;
// }
// let purchases = allStorage();

const items = { ...localStorage };
let itemsArray = Object.entries(items);
// console.log(itemsArray);

// TODO: since counter item also presented in items, add length check in cycle and skip it if it's too small

// localStorage.clear();

// console.log(JSON.parse(items.spoon).titleInfo);
// console.log(JSON.parse(Object.entries(items)[0][1]));
// console.log(itemsArray.length);

let container = document.querySelector(".purchases");

for (let i = 0; i < itemsArray.length; i++) {
  let item = JSON.parse(Object.entries(items)[i][1]);
  if (item.imageInfo === undefined) {
    continue;
  }
  // console.log(item);
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="purchases__item" id="${localStorage.key(i)}">
        <img
          src="${item.imageInfo}"
          alt=""
          class="purchases__img"
        />
        <p class="purchases__title">${item.titleInfo}</p>
        <p class="purchases__price">${item.priceInfo}</p>
        <img src="../close.png" alt="" class="remove__item">
      </div>`
  );
}

let clear = document.querySelector(".clear");
let pay = document.querySelector(".payment__link");
if (container.children.length === 0) {
  clear.style.display = "none";
  pay.style.display = "none";
}
clear.addEventListener("click", () => {
  localStorage.clear();
  while (container.firstChild) {
    container.firstChild.remove();
  }
  if (container.children.length === 0) {
    clear.style.display = "none";
    cartCount.style.display = "none";
    pay.style.display = "none";
  }
});

// let removeButton = document.querySelector(".remove__item");
// removeButton.addEventListener("click", () => console.log("it works"));

let purchases = document.querySelector(".purchases");
purchases.addEventListener("click", (event) => {
  if (event.target.className === "remove__item") {
    // console.log(event.target.closest(".purchases__item"));
    // console.log(localStorage);
    event.target.closest(".purchases__item").remove();
    // console.log(`"${event.target.closest(".purchases__item").id}"`);
    localStorage.removeItem(`${event.target.closest(".purchases__item").id}`);
    let counter = Number(localStorage.getItem("counter"));
    counter -= 1;
    localStorage.setItem("counter", counter.toString());
    let cartCount = document.querySelector(".goods__counter");
    cartCount.textContent = localStorage.getItem("counter");
    if (container.children.length === 0) {
      clear.style.display = "none";
      cartCount.style.display = "none";
      pay.style.display = "none";
    }
  }
});
