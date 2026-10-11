interface NewProduct {
  name: string;
  price: number;
  category?: string;
}

function displayProduct(product: NewProduct) {
  console.log("Name", product.name, "Price", product.price);
}

let np1 = {
  name: "Mobile",
  price: 62000,
};

let np2 = {
  name: "Laptop",
  price: 80000,
  category: "Electronics",
};

displayProduct(np1);
displayProduct(np2);
