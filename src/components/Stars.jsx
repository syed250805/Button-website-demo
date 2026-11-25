import { StarIcon } from './Icons.jsx'

export default function Stars({ value, outOf = 5 }) {
  return (
    <span className="stars" aria-label={`${value} out of ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <StarIcon key={i} filled={i < Math.round(value)} />
      ))}
    </span>
  )
}
