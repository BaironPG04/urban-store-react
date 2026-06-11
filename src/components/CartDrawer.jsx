import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDrawer() {
const {
  cart,
  isCartOpen,
  setIsCartOpen,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = useContext(CartContext);
  if (!isCartOpen) return null;
  const subtotal = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "350px",
        height: "100vh",
        backgroundColor: "white",
        boxShadow: "-4px 0 10px rgba(0,0,0,0.2)",
        padding: "20px",
        overflowY: "auto",
        zIndex: 1000
      }}
    >
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}
>
  <h2>Tu Carrito</h2>

  <button
    onClick={() => setIsCartOpen(false)}
    style={{
      border: "none",
      background: "none",
      fontSize: "20px",
      cursor: "pointer"
    }}
  >
    ✕
  </button>
</div>
      <button
  onClick={() => setIsCartOpen(false)}
  style={{
    marginBottom: "20px",
    padding: "8px 12px",
    cursor: "pointer"
  }}
>
  Cerrar
</button>

      {cart.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px"
            }}
          >
            <h4>{item.name}</h4>

           <div
  style={{
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "10px 0"
  }}
>
  <button
    onClick={() =>
      decreaseQuantity(item.id)
    }
  >
    -
  </button>

  <span>{item.quantity}</span>

  <button
    onClick={() =>
      increaseQuantity(item.id)
    }
  >
    +
  </button>
</div>

<p>
  $
  {(item.price * item.quantity).toLocaleString()}
</p>

<button
  onClick={() => removeItem(item.id)}
>
  Eliminar
</button>
          </div>
        ))
      )}
      <hr />

<h3>
  Subtotal: $
  {subtotal.toLocaleString()}
</h3>
    </div>
  );
}

export default CartDrawer;