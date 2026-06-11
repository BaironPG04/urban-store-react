function ProductCard({ product }) {
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
        style={{
          padding: "10px",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ProductCard