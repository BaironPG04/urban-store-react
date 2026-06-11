import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDrawer() {
  const { cart, isCartOpen } = useContext(CartContext);

  if (!isCartOpen) return null;

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
      <h2>Tu Carrito</h2>

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

            <p>
              Cantidad: {item.quantity}
            </p>

            <p>
              $
              {(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartDrawer;