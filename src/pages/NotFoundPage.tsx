import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page Not found</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}
