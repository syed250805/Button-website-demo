export default function ProductCard({ product, showCategory = true, detailed = false }) {
  const img = product.images[0]
  return (
    <div className="pcard">
      <div className="pcard__img">
        {img ? (
          <img src={img} alt={product.name} loading="lazy" />
        ) : (
          <span className="pcard__noimg">No image</span>
        )}
      </div>
      <div className="pcard__body">
        {showCategory && <span className="pcard__cat">{product.categoryName}</span>}
        <h3 className="pcard__name">{product.name}</h3>
        <span className="pcard__meta">
          {product.price || 'Ask Price'}
          {product.moq ? ` · MOQ ${product.moq}` : ''}
        </span>
        {detailed && (product.specs.length > 0 || product.description.length > 0) && (
          <details className="pcard__details">
            <summary>Specifications</summary>
            {product.specs.length > 0 && (
              <table className="specs">
                <tbody>
                  {product.specs.map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {product.description.length > 0 && (
              <ul className="pd__bullets">
                {product.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
            {product.additional.map((a, i) => (
              <p key={i} className="small muted">
                {a}
              </p>
            ))}
          </details>
        )}
      </div>
    </div>
  )
}
