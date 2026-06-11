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

<footer
  style={{
    backgroundColor: "#111",
    color: "white",
    padding: "40px 30px",
    marginTop: "60px"
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px"
    }}
  >
    <div>
      <h3>Urban Store</h3>
      <p>
        Sneakers exclusivos y moda urbana para quienes
        buscan destacar con estilo.
      </p>
    </div>

    <div>
      <h3>Contacto</h3>
      <p>📍 Calle 39 #5-95 Lagos 2, Floridablanca</p>
      <p>📞 310 201 5851</p>
      <p>📞 321 996 1948</p>
    </div>

    <div>
      <h3>Redes Sociales</h3>
      <p>📸 Instagram: @urbanstorebga</p>
      <p>
        Síguenos para conocer lanzamientos,
        promociones y nuevas colecciones.
      </p>
    </div>

    <div>
      <h3>Horario</h3>
      <p>Lunes a Sábado</p>
      <p>9:30 AM - 8:00 PM</p>
      <p>Domingos y festivos</p>
      <p>10:00 AM - 4:00 PM</p>
    </div>
  </div>

  <hr
    style={{
      margin: "30px 0",
      borderColor: "#333"
    }}
  />

  <p
    style={{
      textAlign: "center"
    }}
  >
    © 2026 Urban Store. Todos los derechos reservados.
  </p>
</footer>

    </>
  )
}

export default App