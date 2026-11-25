import { company } from '../data/siteData.js'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span className="topbar__left">
          {company.city}, {company.state}
        </span>
        <span className="topbar__center">{company.tagline}</span>
        <a className="topbar__right" href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>
          Call {company.phone}
        </a>
      </div>
    </div>
  )
}
