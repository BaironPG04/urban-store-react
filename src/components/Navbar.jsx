import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#111",
        color: "white"
      }}
    >
      <h2>Urban Store</h2>

      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        🛒 {totalItems}
      </div>
    </nav>
  );
}

export default Navbar;