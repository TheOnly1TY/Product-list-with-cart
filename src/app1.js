import { ProductDescription } from "./ProductDescription";
import { productData } from "./productData";
import { LogoName } from "./LogoName";
import { ProductsList } from "./ProductsList";
import { Product } from "./Product";
import { CartCarbonNeutralMessage } from "./CartCarbonNeutralMessage";
import { OrderButton } from "./OrderButton";
import { AddToCartButton } from "./AddToCartButton";
import { EmptyCart } from "./EmptyCart";
import { TotalPriceOrdered } from "./TotalPriceOrdered";

export default function App() {
  return (
    <div className="App">
      <div>
        <LogoName />
        <ProductsList>
          {productData.map((product, i) => (
            <Product key={i}>
              <ProductImageWithButton product={product} />
              <ProductDescription product={product} />
            </Product>
          ))}
        </ProductsList>
      </div>
      <ShoppingCart />
    </div>
  );
}

function ProductImageWithButton({ product }) {
  return (
    <div className="image-button-group">
      <figure className="product-image">
        <img src={product.image.desktop} alt="product img" />
      </figure>

      <button className={` add-items--button ${"add-to-cart-btn"}`}>
        <AddToCartButton />
      </button>
    </div>
  );
}

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

function CartItems() {
  return (
    <>
      <TotalPriceOrdered />
      <CartCarbonNeutralMessage />
      <OrderButton>Confirm Order</OrderButton>
    </>
  );
}

function AddedItems({ addedProducts, cartProduct, setAddedProducts }) {
  return (
    <>
      <div className="added-products">
        <div className="addedProductDetails">
          <h2>{cartProduct.name}</h2>
          <p>
            <span className="quantity"></span>
            <span className="pricePer1"></span>
            <span className="totalPrice"></span>
          </p>
        </div>
        <figure className="remove-icon">
          <img src="images/icon-remove-item.svg" alt="remove item icon" />
        </figure>
      </div>
      <div className="line"></div>
    </>
  );
}
