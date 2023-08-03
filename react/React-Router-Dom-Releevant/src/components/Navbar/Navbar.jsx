import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <Link to="/">Homepage</Link>
    <Link to="products">Products</Link>
     <Link to="about">About US</Link>
     </>
  )
}

export default Navbar