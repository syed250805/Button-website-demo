import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { categories, allProducts } from '../data/siteData.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'all'
  const q = params.get('q') || ''

  const list = useMemo(() => {
    let l = active === 'all' ? allProducts : allProducts.filter((p) => p.categorySlug === active)
    if (q) {
      const s = q.toLowerCase()
      l = l.filter((p) =>
        (p.name + ' ' + p.categoryName + ' ' + p.description.join(' ')).toLowerCase().includes(s)
      )
    }
    return l
  }, [active, q])

  const cat = categories.find((c) => c.slug === active)
  const set = (slug) => {
    const next = new URLSearchParams()
    if (slug !== 'all') next.set('category', slug)
    if (q) next.set('q', q)
    setParams(next)
  }

  return (
    <div className="container page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <Link to="/product">Product</Link>
        {cat && (
          <>
            <span>/</span> <span>{cat.name}</span>
          </>
        )}
      </div>
      <h1 className="page__title">{cat ? cat.name : 'Our Products'}</h1>
      <p className="page__lead">
        {cat
          ? cat.intro
          : `${allProducts.length} products across ${categories.length} categories of tailoring materials and garment accessories.`}
      </p>

      <div className="products-layout">
        <aside className="filters">
          <label className="filters__search">
            <input
              type="search"
              placeholder="Search products"
              value={q}
              onChange={(e) => {
                const next = new URLSearchParams(params)
                e.target.value ? next.set('q', e.target.value) : next.delete('q')
                setParams(next, { replace: true })
              }}
            />
          </label>
          <select
            className="filters__select"
            value={active}
            onChange={(e) => set(e.target.value)}
            aria-label="Category"
          >
            <option value="all">All categories ({allProducts.length})</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({c.products.length})
              </option>
            ))}
          </select>
          <ul className="filters__list">
            <li>
              <button className={active === 'all' ? 'is-active' : ''} onClick={() => set('all')}>
                All categories <em>{allProducts.length}</em>
              </button>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <button
                  className={active === c.slug ? 'is-active' : ''}
                  onClick={() => set(c.slug)}
                >
                  {c.name} <em>{c.products.length}</em>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div>
          {q && (
            <p className="muted">
              Showing {list.length} result{list.length === 1 ? '' : 's'} for “{q}”
            </p>
          )}
          <div className="grid3">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} detailed />
            ))}
          </div>
          {list.length === 0 && <p className="empty">No products match your search.</p>}
        </div>
      </div>
    </div>
  )
}
