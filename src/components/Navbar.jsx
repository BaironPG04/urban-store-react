import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
const {
  cart,
  isCartOpen,
  setIsCartOpen
} = useContext(CartContext);
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
  onClick={() => setIsCartOpen(!isCartOpen)}
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  🛒 {totalItems}
</div>
    </nav>
  );
}

export default Navbar;