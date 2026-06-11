import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        backgroundColor: "white",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "8px"
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
          padding: "10px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#111",
          color: "white"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;