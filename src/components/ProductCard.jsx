import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
  borderRadius: "15px",
  overflow: "hidden",
  backgroundColor: "white",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  transition: "0.3s"
}}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
height: "300px",
objectFit: "cover"
        }}
      />

      <h3 style={{ marginTop: "10px" }}>
        {product.name}
      </h3>

      <p style={{ margin: "10px 0" }}>
        ${product.price.toLocaleString()}
      </p>

      <button
        onClick={() => addToCart(product)}
       style={{
  padding: "12px 20px",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#111",
  color: "white",
  width: "100%",
  fontWeight: "bold"
}}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;