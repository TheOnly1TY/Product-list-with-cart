export function ProductDescription({ product }) {
  return (
    <div className="productDescription">
      <p className="productCategory">{product.category}</p>
      <h2 className="productName">{product.name}</h2>
      <p className="productPrice">${product.price.toFixed(2)}</p>
    </div>
  );
}
