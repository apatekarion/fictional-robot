// let goods = document.querySelector(".new__goods");
// goods.addEventListener("click", (event) => {
// let image = event.target.closest(".new__good-image").src;
// let title = event.target.closest(".new__good-info-title").textContent;
// let price = event.target.closest(".new__good-info-price").textContent;
// let info = {
//   imageInfo: image,
//   titleInfo: title,
//   priceInfo: price,
// };
// console.log(event.target.closest(".new__good"));
// console.log(info);
//   console.log(event.target.closest.parentElement);
// });
// let buttons = document.querySelectorAll(".cart");
// console.log(buttons);
//
// buttons.forEach((button) => {
//   let btn = button.outerHTML;
//   btn.addEventListener("click", () => {
//     console.log("button");
//   });
// });
// let buyToy = document.querySelector("#buy__toy");
// let buySpoon = document.querySelector("#buy__spoon");
//
// buyToy.addEventListener("click", () => {
//   let card = buyToy.parentElement.parentElement.parentElement;
//
//   let image = card.children[0].src;
//   let title = card.children[1].children[0].textContent;
//   let price = card.children[1].children[1].children[0].textContent;
//
//   let info = {
//     imageInfo: image,
//     titleInfo: title,
//     priceInfo: price,
//   };
//   console.log(info);
//   localStorage.setItem("wooden-toy", JSON.stringify(info));
// });
//
// buySpoon.addEventListener("click", () => {
//   let card = buySpoon.parentElement.parentElement.parentElement;
//
//   let image = card.children[0].src;
//   let title = card.children[1].children[0].textContent;
//   let price = card.children[1].children[1].children[0].textContent;
//
//   let info = {
//     imageInfo: image,
//     titleInfo: title,
//     priceInfo: price,
//   };
//   console.log(info);
//   localStorage.setItem("spoon", JSON.stringify(info));
// });

let cartCount = document.querySelector(".goods__counter");
cartCount.textContent = localStorage.getItem("counter");
if (cartCount.textContent === "" || cartCount.textContent === "0") {
  cartCount.style.display = "none";
} else {
  cartCount.style.display = "inline";
}
