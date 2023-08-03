import {Link} from 'react-router-dom'

function Nav({withUser}) {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container d-flex">
                
                <div className="" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <div className='nav-link '>
                              <Link to="/">Home</Link>
                              </div>
                          </li>
                          <li className="nav-item">
                              <div className='nav-link ' id="Products">
                              <Link to="/products">Products</Link>
                              </div>
                          </li>
                          <li className="nav-item">
                              <div className='nav-link '>
                              <Link to="/politica">Politica</Link>
                              </div>
                          </li>
                          <li className="nav-item">
                              <div className='nav-link '>
                              <Link to="/carrito">Carrito</Link>
                              </div>
                          </li>
                        </ul>
                      </div>
                </div> 

                {withUser ? (<div className="">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                              <a className='nav-link '>Mis pedidos</a>
                              
                          </li>
                          <li className="nav-item">
                              <a className='nav-link '>Log out</a>

                          </li>
                        </ul>
                    </div>
                </div>) : (null) }
                
            </div>
         
    </nav> 
    </>
  );
}

export default Nav;
