const products = [ 
  { 
    id: 0, 
    image: "./assets/img/p1.png", 
    title: "VS Pace Mens Trainers", 
    price: 120, 
    discount: 50, 
  }, 
  { 
    id: 1, 
    image: "./assets/img/p2.png", 
    title: "Infernus V3", 
    price: 100, 
    discount: 0, 
  }, 
  { 
    id: 2, 
    image: "./assets/img/p3.png", 
    title: "Alpha All-Purpose Gen Z", 
    price: 20, 
    discount: 30, 
  }, 
  { 
    id: 3, 
    image: "./assets/img/p4.png", 
    title: "A11 Sky", 
    price: 20, 
    discount: 15, 
  }, 
  { 
    id: 4, 
    image: "./assets/img/p5.png", 
    title: "Urban Tracks ", 
    price: 100, 
    discount: 0, 
  }, 
  { 
    id: 5, 
    image: "./assets/img/p6.png", 
    title: "Court Vision", 
    price: 20, 
    discount: 0, 
  }, 
  { 
    id: 6, 
    image: "./assets/img/p7.png", 
    title: "Classic Core 99", 
    price: 20, 
    discount: 15, 
  }, 
  { 
    id: 7, 
    image: "./assets/img/p8.png", 
    title: "Quick Pace V2", 
    price: 100, 
    discount: 10, 
  }, 
  { 
    id: 8, 
    image: "./assets/img/p9.png", 
    title: "Air Max T6 Waterproof ", 
    price: 20, 
    discount: 0, 
  }, 
  { 
    id: 9, 
    image: "./assets/img/p10.png", 
    title: "High Breed F2", 
    price: 20, 
    discount: 40, 
  }, 
]; 
 
const displayProducts = function (filterText = "") { 
  const productContainer = document.getElementById("all-products"); 
  productContainer.innerHTML = ""; 
 
  
  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(filterText.toLowerCase()) 
  ); 
 
 
  filteredProducts.forEach(function (product) { 
    const discountPrice = product.price - (product.price * product.discount) / 100; 
    const productHTML = 
      '<div class="box">' + 
      (product.discount ? '<span class="discount">' + product.discount + "% OFF</span>" : "") + 
      '<div class="img-box">' + 
      '<img class="images" src="' + product.image + '" alt="' + product.title + '" />' + 
      "</div>" + 
      '<div class="bottom">' + 
      "<p>" + 
      product.title + 
      "</p>" + 
      "<div>" + 
      "<span>$" + 
      discountPrice.toFixed(2) + 
      "</span>" + 
      (product.discount ? "<del>$" + product.price.toFixed(2) + "</del>" : "") + 
      "</div>" + 
      '<button>Add to cart</button>' + 
      "</div>" + 
      "</div>"; 
 
    productContainer.innerHTML += productHTML; 
  }); 
}; 
 

displayProducts(); 
 

const searchInput = document.getElementById("search"); 
searchInput.addEventListener("input", (e) => { 
  const searchTerm = e.target.value; 
  displayProducts(searchTerm); 
}); 
 

const cartIcon = document.getElementById("cartIcon"); 
const cartPopup = document.getElementById("cart"); 
const overlay = document.getElementById("overlay"); 
 

cartIcon.addEventListener("click", () => { 
  cartPopup.style.display = "block"; 
  overlay.style.display = "block"; 
}); 
 

overlay.addEventListener("click", () => { 
  cartPopup.style.display = "none"; 
  overlay.style.display = "none"; 
});

