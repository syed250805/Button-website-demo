import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="container page center">
      <h1 className="page__title">Page not found</h1>
      <p className="page__lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn--dark">
        Back to home
      </Link>
    </div>
  )
}
