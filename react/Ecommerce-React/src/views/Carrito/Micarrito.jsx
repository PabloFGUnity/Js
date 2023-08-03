// import Button from "../../components/Button"
import Card from "../../components/Card"
import { card } from "../../components/Card/CardsDummy"
import Benefits from "../../components/Benefits"
import logo from "../../assets/icons/330942.png";

function Micarrito() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg py-4 ">
          <div className="container gap-3 ">
            
            <div className="justify-content-start gap-3">
              <img src={logo} alt="logoprincipal" width="50px" />
              <a className="navbar-brand " href="#">
                My<span className="text-info">Video</span>Game
              </a>
            </div>
            

            <div className="d-flex w-50 gap-3 align-items-center">
              <button type="button" className="btn btn-outline-primary"><i className="bi bi-cart"></i> Carrito</button>
              <i className="bi bi-arrow-right-circle fs-5"></i>
              <button type="button" className="btn bg-body-tertiary "><i className="bi bi-wallet2"></i> FormadePago</button>
              <i className="bi bi-arrow-right-circle fs-5"></i>
              <button type="button" className="btn bg-body-tertiary "><i className="bi bi-credit-card"></i> FinalizarPedido</button>



            </div>

            
          </div>
        </nav>
        <Card cards={card}/>
        <Benefits/>
    </div>
  )
}

export default Micarrito