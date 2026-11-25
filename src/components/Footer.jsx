import { Link } from 'react-router-dom'
import { company, categories } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3>{company.name}</h3>
          <p>{company.slogan}</p>
          <p className="muted">
            {company.natureOfBusiness} · Since {company.established} · {company.city},{' '}
            {company.state}
          </p>
        </div>
        <div>
          <h4>Website Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to={`/product?category=${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              {company.city} – {company.pincode}, {company.state}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </span>
        <span>GST: {company.gst}</span>
      </div>
    </footer>
  )
}
