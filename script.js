"use strict";
const header = document.querySelector("header");
const section1 = document.querySelector("#concept--1");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entries.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

// Fetch content in view more section
// const showProduct = async function () {
//   try {
//     // Loading data
//     const res = await fetch(
//       "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
//     );
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     console.log(res, data);

//     // Rendering data

//     const markup = `
//      <h2 class="product__heading heading-2">Products</h2>
//       <img
//         src="${data.image_link}"
//         alt="handwash picture"
//         class="product-img"
//       />
//       <div class="product__container">
//         <h2 class="heading-2">${data.catergory}</h2>
//         <h4 class="heading-sub">${data.name}</h4>
//         <p class="text">
//         ${data.description}
//         </p>
//     `;

//     const moreDetails = document.querySelector(".more-details");
//     moreDetails.insertAdjacentHTML("afterbegin", markup);
//   } catch (err) {
//     alert(err);
//   }
// };

// showProduct();

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const btnMore = document.querySelector(".btn-more");
  const moreDetails = document.querySelector(".more-details");

  btnMore.addEventListener("click", async function () {
    try {
      const res = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
      );
      const data = await res.json();

      if (!res.ok) throw new Error(`${data.message} (${res.status})`);

      localStorage.setItem("productDetails", JSON.stringify(data));
      window.location.href = "details.html";
    } catch (err) {
      console.error("Error fetching additional content:", err);
    }
  });
});

// Login in function
document.addEventListener("DOMContentLoaded", () => {
  const openLoginPopupButton = document.getElementById("openLoginPopup");
  const loginPopup = document.getElementById("loginPopup");
  const closeButton = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm");

  // Show the popup when the button is clicked
  openLoginPopupButton.addEventListener("click", () => {
    loginPopup.style.display = "flex";
  });

  // Hide the popup when the close button is clicked
  closeButton.addEventListener("click", () => {
    loginPopup.style.display = "none";
  });

  // Hide the popup when clicking outside of the popup content
  window.addEventListener("click", (event) => {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
    }
  });

  // Handle the form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform your login logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Optionally, close the popup after successful login
    loginPopup.style.display = "none";
  });
});

//
