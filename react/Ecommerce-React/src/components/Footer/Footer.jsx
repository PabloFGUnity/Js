
function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
    <div className="container d-flex ">

       
        <div className="w-100">
            <a className="h4 navbar-brand " href="#">My<span className="text-info">Video</span>Game</a>

            <div className="d-flex gap-3 mt-5 ">
                <ul  >
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                </ul>

                <ul>
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                    <li>Política</li>
                </ul>
            </div>
        </div>
        <div className="w-100">
            <h4>Suscribete a la newsletter</h4>
            <p>Es genial!</p>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary " type="button" id="button-addon2">Suscríbete</button>
              </div>
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Acepto la politica
                </label>
            </div>

            <div className="d-flex gap-3">
                <p>Síguenos en redes:</p>
                <a href="#" ><i className="bi bi-instagram text-light"></i></a>
                <a href="#" ><i className="bi bi-youtube text-light"></i></a>
                <a href="#" ><i className="bi bi-facebook text-light"></i></a>
                <a href="#" ><i className="bi bi-twitch text-light"></i></a>
            </div>
        
        </div>

    </div>



</footer>
  )
}

export default Footer