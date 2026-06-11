import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import products from "./data/products"

function App() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          Nueva Colección
        </h1>

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