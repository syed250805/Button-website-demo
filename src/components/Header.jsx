import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { company } from '../data/siteData.js'
import { SearchIcon, MenuIcon, CloseIcon } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const close = () => setOpen(false)

  const submit = (e) => {
    e.preventDefault()
    navigate(`/product?q=${encodeURIComponent(q.trim())}`)
    setSearchOpen(false)
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={close} aria-label={company.name}>
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="38" height="38">
              <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <g fill="currentColor">
                <circle cx="16" cy="16" r="2.3" />
                <circle cx="24" cy="16" r="2.3" />
                <circle cx="16" cy="24" r="2.3" />
                <circle cx="24" cy="24" r="2.3" />
              </g>
            </svg>
          </span>
          <span className="logo__text">
            <strong>Mahalaxmi</strong>
            <small>Button Centre</small>
          </span>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/product" onClick={close}>
            Product
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact us
          </NavLink>
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            aria-label="Search products"
            onClick={() => setSearchOpen((s) => !s)}
          >
            <SearchIcon />
          </button>
          <button
            className="icon-btn menu-btn"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {searchOpen && (
        <form className="searchbar container" onSubmit={submit}>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search zippers, buttons, interlining, hooks..."
          />
          <button type="submit">Search</button>
        </form>
      )}
    </header>
  )
}
