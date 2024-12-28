import { useState } from "react";

const productData = [
  {
    image: {
      thumbnail: "images/image-waffle-thumbnail.jpg",
      mobile: "images/image-waffle-mobile.jpg",
      tablet: "images/image-waffle-tablet.jpg",
      desktop: "images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "images/image-creme-brulee-thumbnail.jpg",
      mobile: "images/image-creme-brulee-mobile.jpg",
      tablet: "images/image-creme-brulee-tablet.jpg",
      desktop: "images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "images/image-macaron-thumbnail.jpg",
      mobile: "images/image-macaron-mobile.jpg",
      tablet: "images/image-macaron-tablet.jpg",
      desktop: "images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "images/image-tiramisu-thumbnail.jpg",
      mobile: "images/image-tiramisu-mobile.jpg",
      tablet: "images/image-tiramisu-tablet.jpg",
      desktop: "images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "images/image-baklava-thumbnail.jpg",
      mobile: "images/image-baklava-mobile.jpg",
      tablet: "images/image-baklava-tablet.jpg",
      desktop: "images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "images/image-meringue-thumbnail.jpg",
      mobile: "images/image-meringue-mobile.jpg",
      tablet: "images/image-meringue-tablet.jpg",
      desktop: "images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "images/image-cake-thumbnail.jpg",
      mobile: "images/image-cake-mobile.jpg",
      tablet: "images/image-cake-tablet.jpg",
      desktop: "images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "images/image-brownie-thumbnail.jpg",
      mobile: "images/image-brownie-mobile.jpg",
      tablet: "images/image-brownie-tablet.jpg",
      desktop: "images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "images/image-panna-cotta-thumbnail.jpg",
      mobile: "images/image-panna-cotta-mobile.jpg",
      tablet: "images/image-panna-cotta-tablet.jpg",
      desktop: "images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export default function App() {
  return (
    <div className="App">
      <div>
        <LogoName />
        <ProductsList />
      </div>
      <ShoppingCart />
    </div>
  );
}

function LogoName() {
  return <h1 className="logoName">Desserts</h1>;
}

function ProductsList() {
  return (
    <div className="productsList">
      {productData.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product">
      <ProductImageWithButton product={product} />
      <ProductDescription product={product} />
    </div>
  );
}

function ProductImageWithButton({ product }) {
  const [displayCounter, setDisplayCounter] = useState(false);
  return (
    <div className="image-button-group">
      <figure className="product-image">
        <img
          src={product.image.desktop}
          style={displayCounter ? { border: "2px solid var(--Red)" } : null}
          alt="product img"
        />
      </figure>

      <button
        className={` add-items--button ${
          !displayCounter ? "add-to-cart-btn" : "counter-btn"
        }`}
      >
        {!displayCounter ? (
          <AddToCartButton
            displayCounter={displayCounter}
            onDisplayCounter={setDisplayCounter}
          />
        ) : (
          <CounterButton
            displayCounter={displayCounter}
            onDisplayCounter={setDisplayCounter}
          />
        )}
      </button>
    </div>
  );
}

function ProductDescription({ product }) {
  return (
    <div className="productDescription">
      <p className="productCategory">{product.category}</p>
      <h2 className="productName">{product.name}</h2>
      <p className="productPrice">${product.price.toFixed(2)}</p>
    </div>
  );
}

function AddToCartButton({ displayCounter, onDisplayCounter }) {
  return (
    <div
      className="add-to-cart"
      onClick={() => onDisplayCounter(!displayCounter)}
    >
      <img src="images/icon-add-to-cart.svg" alt="add-to-cart img" />
      <p>Add to Cart</p>
    </div>
  );
}

function CounterButton({ displayCounter, onDisplayCounter }) {
  const [count, setCount] = useState(1);

  function handleDecrementCount() {
    setCount(count - 1);
    if (count <= 1) {
      onDisplayCounter(!displayCounter);
    }
  }

  return (
    <div className="counter">
      <span onClick={() => handleDecrementCount()}>
        <img src="images/icon-decrement-quantity.svg" alt="decrement icon" />
      </span>
      <p>{count}</p>
      <span onClick={() => setCount(count + 1)}>
        <img src="images/icon-increment-quantity.svg" alt="increment icon" />
      </span>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="cart">
      <h3>Your Cart (0)</h3>
      <EmptyCart />
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src="images/illustration-empty-cart.svg" alt="empty-cart" />
      <p>Your added items will appear here</p>
    </div>
  );
}

function CartItems() {
  return;
}

function AddedItems() {
  return;
}
