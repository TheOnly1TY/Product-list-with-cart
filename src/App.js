import { useState } from "react";
import { ProductDescription } from "./ProductDescription";
import { productData } from "./productData";
import { LogoName } from "./LogoName";
import { ProductsList } from "./ProductsList";
import { Product } from "./Product";
import { CartCarbonNeutralMessage } from "./CartCarbonNeutralMessage";

export default function App() {
  const [addedProducts, setAddedProducts] = useState((addedProducts) => []);

  return (
    <div className="App">
      <div>
        <LogoName />
        <ProductsList>
          {productData.map((product, i) => (
            <Product product={product} key={i}>
              <ProductImageWithButton
                product={product}
                addedProducts={addedProducts}
                setAddedProducts={setAddedProducts}
              />
              <ProductDescription product={product} />
            </Product>
          ))}
        </ProductsList>
      </div>
      <ShoppingCart
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />
    </div>
  );
}

function ProductImageWithButton({ product, addedProducts, setAddedProducts }) {
  const [displayCounter, setDisplayCounter] = useState(false);
  function handleAddToCart() {
    setAddedProducts((prev) => {
      const existingProduct = prev.find((p) => p.name === product.name);
      if (existingProduct) {
        return prev.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

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
        onClick={handleAddToCart}
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
            product={product}
            addedProducts={addedProducts}
            setAddedProducts={setAddedProducts}
          />
        )}
      </button>
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

function CounterButton({
  product,
  displayCounter,
  onDisplayCounter,
  addedProducts,
  setAddedProducts,
}) {
  const [count, setCount] = useState(1);

  function handleIncrementCount() {
    setCount((prev) => prev + 1);
    setAddedProducts((prev) =>
      prev.map((p) =>
        p.name === product.name ? { ...p, quantity: count + 1 } : p
      )
    );
  }

  function handleDecrementCount() {
    setCount((prev) => prev - 1);
    setAddedProducts((prev) =>
      prev.map((p) =>
        p.name === product.name ? { ...p, quantity: count - 1 } : p
      )
    );
    if (count <= 1) {
      onDisplayCounter(!displayCounter);
    }
  }

  return (
    <div className="counter">
      <span onClick={handleDecrementCount}>
        <img src="images/icon-decrement-quantity.svg" alt="decrement icon" />
      </span>
      <p>{count}</p>
      <span onClick={handleIncrementCount}>
        <img src="images/icon-increment-quantity.svg" alt="increment icon" />
      </span>
    </div>
  );
}

function ShoppingCart({ addedProducts, setAddedProducts }) {
  const numProductInCart = addedProducts.length;
  const productInCart = numProductInCart !== 0;
  return (
    <div className="cart">
      <h3>Your Cart ({productInCart ? numProductInCart : 0})</h3>
      {numProductInCart !== 0 ? (
        <CartItems
          addedProducts={addedProducts}
          setAddedProducts={setAddedProducts}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

function CartItems({ addedProducts, setAddedProducts }) {
  return (
    <>
      {addedProducts.map((cartProduct, i) => (
        <AddedItems
          cartProduct={cartProduct}
          setAddedProducts={setAddedProducts}
          addedProducts={addedProducts}
          key={i}
        />
      ))}
      <TotalPriceOrdered />
      <CartCarbonNeutralMessage />
      <Button>Confirm Order</Button>
    </>
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

function AddedItems({ addedProducts, cartProduct, setAddedProducts }) {
  // const [totalPrice, setTotalPrice] = useState([]);
  // DUMMY DATA
  const pricePerProduct = cartProduct.price.toFixed(2);
  const totalPricePerProduct = (pricePerProduct * cartProduct.quantity).toFixed(
    2
  );

  function handleRemoveProduct(cartProduct) {
    setAddedProducts(addedProducts.filter((p) => p.name !== cartProduct.name));
  }

  return (
    <>
      <div className="added-products">
        <div className="addedProductDetails">
          <h2>{cartProduct.name}</h2>
          <p>
            <span className="quantity">{cartProduct.quantity}x</span>
            <span className="pricePer1">@ ${pricePerProduct}</span>
            <span className="totalPrice">${totalPricePerProduct}</span>
          </p>
        </div>
        <figure
          className="remove-icon"
          onClick={() => handleRemoveProduct(cartProduct)}
        >
          <img src="images/icon-remove-item.svg" alt="remove item icon" />
        </figure>
      </div>
      <div className="line"></div>
    </>
  );
}

function TotalPriceOrdered() {
  return (
    <div className="totalPriceOrdered">
      <p>Order Total</p>
      <h2>$5.50</h2>
    </div>
  );
}

function Button({ children }) {
  return <button className="orderButton">{children}</button>;
}
