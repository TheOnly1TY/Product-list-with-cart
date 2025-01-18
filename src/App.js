import { useState } from "react";
import productData from "./data.json";

export default function App() {
  return (
    <div className="App">
      <div>
        <LogoName />
        <ProductsList productData={productData} />
      </div>
      <ShoppingCart />
    </div>
  );
}

function LogoName() {
  return <h1 className="logoName">Desserts</h1>;
}

function ProductsList({ productData }) {
  return (
    <div className="productsList">
      {productData.map((product) => (
        <Product>
          <ProductImageWithButton product={product} />
          <ProductDescription product={product} />
        </Product>
      ))}
    </div>
  );
}
function ProductImageWithButton({ product }) {
  const [counterDisplay, setCounterDisplay] = useState(false);
  return (
    <div className="image-button-group">
      <figure className="product-image">
        <img
          src={product.image.desktop}
          className={` ${counterDisplay && "border-red"}`}
          alt="product img"
        />
      </figure>

      <button
        onClick={() => setCounterDisplay(true)}
        className={` add-items--button ${
          counterDisplay ? "counter-btn" : "add-to-cart-btn"
        }`}
      >
        {counterDisplay ? <CounterButton /> : <AddToCartButton />}
      </button>
    </div>
  );
}

// function AddedItems({ addedProducts, cartProduct, setAddedProducts }) {
//   return (
//     <>
//       <div className="added-products">
//         <div className="addedProductDetails">
//           <h2>{cartProduct.name}</h2>
//           <p>
//             <span className="quantity"></span>
//             <span className="pricePer1"></span>
//             <span className="totalPrice"></span>
//           </p>
//         </div>
//         <figure className="remove-icon">
//           <img src="images/icon-remove-item.svg" alt="remove item icon" />
//         </figure>
//       </div>
//       <div className="line"></div>
//     </>
//   );
// }

function CounterButton() {
  return (
    <div className="counter">
      <span>
        <img src="images/icon-decrement-quantity.svg" alt="decrement icon" />
      </span>
      <p>1</p>
      <span>
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

// function CartItems() {
//   return (
//     <>
//       <TotalPriceOrdered />
//       <CartCarbonNeutralMessage />
//       <OrderButton>Confirm Order</OrderButton>
//     </>
//   );
// }

function ProductDescription({ product }) {
  return (
    <div className="productDescription">
      <p className="productCategory">{product.category}</p>
      <h2 className="productName">{product.name}</h2>
      <p className="productPrice">${product.price.toFixed(2)}</p>
    </div>
  );
}

// function OrderButton({ children }) {
//   return <button className="orderButton">{children}</button>;
// }

// function AddToCartButton() {
//   return (
//     <div className="add-to-cart">
//       <img src="images/icon-add-to-cart.svg" alt="add-to-cart img" />
//       <p>Add to Cart</p>
//     </div>
//   );
// }

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src="images/illustration-empty-cart.svg" alt="empty-cart" />
      <p>Your added items will appear here</p>
    </div>
  );
}

// function CartCarbonNeutralMessage() {
//   return (
//     <div className="carbon-neutral">
//       <img src="images/icon-carbon-neutral.svg" alt="carbon neeutral " />
//       <p>
//         This is a <b>carbon-neutral</b> delivery
//       </p>
//     </div>
//   );
// }

// function TotalPriceOrdered() {
//   return (
//     <div className="totalPriceOrdered">
//       <p>Order Total</p>
//       <h2>$5.50</h2>
//     </div>
//   );
// }

function Product({ children }) {
  return <div>{children}</div>;
}

function AddToCartButton() {
  return (
    <div className="add-to-cart">
      <img src="images/icon-add-to-cart.svg" alt="add-to-cart img" />
      <p>Add to Cart</p>
    </div>
  );
}
