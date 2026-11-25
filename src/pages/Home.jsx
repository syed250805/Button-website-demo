import { Link } from 'react-router-dom'
import {
  company,
  about,
  categories,
  whatsNew,
  featuredCategories,
  ratings,
  companyImages,
} from '../data/siteData.js'
import ProductCard from '../components/ProductCard.jsx'
import Stars from '../components/Stars.jsx'
import { ArrowIcon } from '../components/Icons.jsx'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img className="hero__img" src={company.heroImage} alt={`${company.name} store`} />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="hero__eyebrow">
            Since {company.established} · {company.city}
          </span>
          <h1>{company.name}</h1>
          <p>{about.headline}</p>
          <div className="hero__ctas">
            <Link to="/product" className="btn btn--light">
              Shop all products
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get best price
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S NEW */}
      <section className="section container">
        <div className="section__head">
          <h2 className="section__title">What's New</h2>
          <Link to="/product?category=new-items" className="link-arrow">
            View all <ArrowIcon />
          </Link>
        </div>
        <div className="grid4">
          {whatsNew.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>About {company.name}</span>
      </div>

      {/* ALTERNATING ROWS */}
      <section className="container rows">
        {about.rows.map((row, i) => (
          <article key={row.title} className={`row ${i % 2 ? 'row--rev' : ''}`}>
            <div className="row__img">
              <img src={row.image} alt={row.imageAlt} loading="lazy" />
            </div>
            <div className="row__text">
              <span className="row__kicker">{row.kicker}</span>
              <h2>{row.title}</h2>
              {row.paragraphs.map((t, j) => (
                <p key={j}>{t}</p>
              ))}
              {row.link && (
                <Link to={row.link.to} className="link-arrow">
                  {row.link.label} <ArrowIcon />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* RATING STRIP */}
      <section className="rating-strip">
        <div className="container rating-strip__inner">
          <div className="rating-strip__score">
            <strong>{ratings.average}</strong>
            <span>/5</span>
          </div>
          <div>
            <Stars value={ratings.average} />
          </div>
          <ul className="rating-strip__stats">
            {ratings.satisfaction.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong> {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORY TILES */}
      <section className="section container">
        <h2 className="section__title section__title--center">
          Choose the right garment accessory for your next order
        </h2>
        <div className="grid4">
          {featuredCategories.map((c) => (
            <Link key={c.slug} to={`/product?category=${c.slug}`} className="ctile">
              <div className="ctile__img">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
              <h3>{c.name}</h3>
              <span>
                {c.products.length} product{c.products.length > 1 ? 's' : ''} available
              </span>
            </Link>
          ))}
        </div>
        <div className="center">
          <Link to="/product" className="btn btn--dark">
            View all {categories.length} categories
          </Link>
        </div>
      </section>

      {companyImages.length > 0 && (
        <section className="section container">
          <h2 className="section__title section__title--center">Visit Our Store</h2>
          <div className="gallery2">
            {companyImages.map((im, i) => (
              <img
                key={i}
                src={im}
                alt={`${company.name} – company photo ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
