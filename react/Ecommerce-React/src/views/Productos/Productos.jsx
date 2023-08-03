import Button from "../../components/Button";
import Card from "../../components/Card";
import { card } from "../../components/Card/CardsDummy";
import Benefits from "../../components/Benefits";
import imagen from "../../assets/images/david-becker-h1y4jJOW-l0-unsplash.jpg"

function Productos() {
  return (
    <>
    <div className="container d-flex justify-content-between align-items-center my-3">
        
        <div>
            <h2>Productos destacados</h2>
            <p>Aprovecha los descuentos</p>
        </div>
        
        <Button className="m-2" text="Ver todos"/>
      </div>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <a href="#" className="btn btn-lg bg-primary text-light">Comprar ahora</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
              <a href="#" className="btn btn-lg btn-primary ">Comprar ahora</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
              <Button className="m-2" text="Comprar ahora"/>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button " data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    <Card cards={card}/>
    <section className="container d-flex justify-content-between align-items-center  my-5 py-5 ">


        <div className="w-100" >
            <h2>Testimonios de clientes</h2>
            <p>No los mires, únete</p>
            <a href="#" className="btn btn-primary">Ver Todos</a>
        </div>


        <div className="w-100">   
            <figure className="text-end border border-2 border-primary rounded-4 p-5 ">
                <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.
                    Awefwefwe wefwqfwqwssak
                </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                <div className="text-black-50">
                    <i className="bi bi-star-fill text-primary" ></i>
                    <i className="bi bi-star-fill text-primary"></i>
                    <i className="bi bi-star-fill text-primary"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
            </figure>  
        </div>

    </section>
    <Benefits/>
    </>
  )
}

export default Productos