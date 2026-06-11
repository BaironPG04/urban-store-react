import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import products from "./data/products"
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <>
      <Navbar />
      <CartDrawer />

      <div style={{ padding: "30px" }}>

  <section
    style={{
      backgroundColor: "#111",
      color: "white",
      padding: "60px 30px",
      borderRadius: "15px",
      textAlign: "center",
      marginBottom: "40px"
    }}
  >
    <h1
      style={{
        fontSize: "3rem",
        marginBottom: "15px"
      }}
    >
      Urban Store
    </h1>

    <p
      style={{
        fontSize: "1.2rem",
        maxWidth: "700px",
        margin: "0 auto"
      }}
    >
      Descubre nuestra nueva colección de Pantalonetas
      exclusivas. Diseños modernos, edición limitada
      y estilo urbano para destacar en cualquier lugar.
    </p>
  </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App