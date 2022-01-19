let bogorod = document.querySelector("#bogorod");
let rezwood = document.querySelector("#rez-wood");
let abram = document.querySelector("#abram");
let woodpaint = document.querySelector("#wood-paint");
let rezbone = document.querySelector("#rez-bone");
let ceramic = document.querySelector("#ceramic");

let goods = document.querySelectorAll(".new__good");

bogorod.style.display = "none";
abram.style.display = "none";

// let filters = document.querySelector(".main__block-filters");
//
// filters.addEventListener("click", (event) => {
//   if (event.target.closest(".main__block-filter")) {
//     event.target
//       .closest(".main__block-filter")
//       .classList.toggle("active-filter");
//     event.target.closest(".main__block-filter").style.borderRadius = "20px";
//   }
// });

bogorod.addEventListener("click", () => {
  bogorod.classList.toggle("active-filter");
});

abram.addEventListener("click", () => {
  abram.classList.toggle("active-filter");
});

// let filtersArray = [rezwood, woodpaint, rezbone, ceramic];
//
// filtersArray.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     console.log(elem);
//     elem.classList.toggle("active-filter");
//     elem.style.borderRadius = "20px";
//     goods.forEach((card) => {
//       if (elem.classList.contains("active-filter")) {
//         card.style.display = "none";
//       }
//       if (!elem.classList.contains("active-filter")) {
//         card.style.display = "block";
//       }
//     });
//     // goods.forEach((item) => {
//     //   if (!item.classList.contains("wood-cut")) {
//     //     item.style.display = "none";
//     //   }
//     //   if (!elem.classList.contains("active-filter")) {
//     //     item.style.display = "block";
//     //   }
//     // });
//   });
// });

//TODO: switch from concrete one to target.closest

rezwood.addEventListener("click", () => {
  rezwood.classList.toggle("active-filter");
  rezwood.style.borderRadius = "20px";
  console.log(goods);
  goods.forEach((elem) => {
    if (!elem.classList.contains("wood-cut")) {
      elem.style.display = "none";
    }
    if (!rezwood.classList.contains("active-filter")) {
      elem.style.display = "block";
    }
  });
  if (rezwood.classList.contains("active-filter")) {
    bogorod.style.display = "block";
    abram.style.display = "block";
  } else {
    bogorod.style.display = "none";
    abram.style.display = "none";
  }
});

woodpaint.addEventListener("click", () => {
  woodpaint.classList.toggle("active-filter");
  woodpaint.style.borderRadius = "20px";
  goods.forEach((elem) => {
    if (!elem.classList.contains("wood-paint")) {
      elem.style.display = "none";
    }
    if (!woodpaint.classList.contains("active-filter")) {
      elem.style.display = "block";
    }
  });
});

rezbone.addEventListener("click", () => {
  rezbone.classList.toggle("active-filter");
  rezbone.style.borderRadius = "20px";
  goods.forEach((elem) => {
    if (!elem.classList.contains("bone-cut")) {
      elem.style.display = "none";
    }
    if (!rezbone.classList.contains("active-filter")) {
      elem.style.display = "block";
    }
  });
});

ceramic.addEventListener("click", () => {
  ceramic.classList.toggle("active-filter");
  ceramic.style.borderRadius = "20px";
  goods.forEach((elem) => {
    if (!elem.classList.contains("ceramic")) {
      elem.style.display = "none";
    }
    if (!ceramic.classList.contains("active-filter")) {
      elem.style.display = "block";
    }
  });
});
