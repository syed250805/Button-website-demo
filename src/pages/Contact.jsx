import { Link } from 'react-router-dom'
import { company, factsheet } from '../data/siteData.js'
import { PhoneIcon, PinIcon, ShieldIcon } from '../components/Icons.jsx'

export default function Contact() {
  const mapQuery = encodeURIComponent(
    `${company.name}, ${company.city}, ${company.state} ${company.pincode}`
  )
  return (
    <div className="container page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>Contact Us</span>
      </div>
      <h1 className="page__title">Contact Us</h1>
      <p className="page__lead">
        Wholesalers, garment manufacturers, tailors and fashion enthusiasts – reach out for the best
        price on any garment accessory.
      </p>
      <div className="contact">
        <div className="contact__cards">
          <div className="ccard">
            <PinIcon />
            <div>
              <h3>Reach Us</h3>
              <p>
                <strong>{company.name}</strong>
                <br />
                {company.city}, {company.state} – {company.pincode}
                <br />
                {company.country}
              </p>
              <p className="muted">{company.ceo} (CEO)</p>
            </div>
          </div>
          <div className="ccard">
            <PhoneIcon />
            <div>
              <h3>Call</h3>
              <p>
                <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a>
              </p>
            </div>
          </div>
          <div className="ccard">
            <ShieldIcon />
            <div>
              <h3>Business Details</h3>
              <p>
                GST No. {company.gst}
                <br />
                {company.legalStatus} · {company.natureOfBusiness}
              </p>
            </div>
          </div>
          <div className="ccard ccard--facts">
            <dl>
              {factsheet.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{Array.isArray(v) ? v.join(', ') : v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="contact__map">
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
