import { Link } from 'react-router-dom'
import Header from '../Templates/Header'

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  )
}

export default NotFound
