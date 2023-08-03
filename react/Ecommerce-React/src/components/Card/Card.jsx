import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
function Card({cards}) {
  return (
    <div className="  d-flex justify-content-evenly mt-5">
    
    {cards.map((card,index) => 
        (
            <section  key={index}>
                <div className="card ">

                    <img src={card.image} className="card-img-top" alt="..."/>
                
                    <div className="card-body">

                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{card.title}</h5>
                            <span>{card.precio}<i className="bi bi-currency-euro text-warning"></i></span>
                            <span>{card.id}</span>
                        </div>
                        <div className="text-black-50">
                            <i className="bi bi-star-fill text-warning" ></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        </div>
                        <p className="card-text">{card.descripcion}</p>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-primary w-100">Comprar</a>
                            <Link  className="btn btn-info text-light" to="33">Ver</Link>
                        </div>
                    

                    </div>
                </div>
            </section>
            
        ))}

    <Outlet/>

    </div>

  )
}

export default Card