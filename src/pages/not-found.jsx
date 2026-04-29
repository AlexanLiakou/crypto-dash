import { Link } from "react-router";

const NotFoundPage = () => {
   
    return (
      <div className="container">
        <h1 className="title">404</h1>
        <p className="message">Oops! The page you are looking for does not exist.</p>
        <Link to={'/'} className="link">Bo Back Home</Link>
      </div>
  )
}

export default NotFoundPage;