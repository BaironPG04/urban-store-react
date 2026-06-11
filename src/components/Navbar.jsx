function Navbar() {
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

      <div>
        🛒 0
      </div>
    </nav>
  )
}

export default Navbar