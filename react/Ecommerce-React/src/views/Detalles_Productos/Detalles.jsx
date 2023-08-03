import imagen from "../../assets/images/pokemon.png"
import Button from "../../components/Button"
import Card from "../../components/Card"
import { card } from "../../components/Card/CardsDummy"
import Benefits from "../../components/Benefits"
import { useParams } from "react-router-dom"

function Detalles() {
    const {id}=useParams();
    console.log(id);
    // let promesa=fetch("locahost:5173/products/id");

  return (
    <div>
        <h2>{id}</h2>
        <div className="container text-start mt-5">
            <div className="row">
                <div className="col">
                    <img src={imagen} className="w-100"/>
                </div>
                <div className="col">
                
                    <h2>Pokemon Perla Reluciente</h2>
                    <p className="h6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut dolorum doloribus ea fugit quidem voluptate debitis, similique sint libero, deleniti accusamus reiciendis ipsam. Voluptatibus iusto natus aliquam facilis earum?</p>
                    <p><span className="h2">40<i className="bi bi-currency-euro text-warning"></i></span></p>

        
                    <div className=" gap-0 ">
                        <input type="button" className=" input-group-text   col-sm-2  rounded-2 placeholder col-12 bg-light text-center " value="- 1 +"/>
                    
                        <Button className="col-sm-6" text="Añadir al carrito"/>
                    </div>

                    <div className="d-flex gap-3 mt-3  ">
                        <i className="bi bi-shield-check text-primary h1 fs-5"></i>
                        <div>
                            <h6>Incluye <span className="text-primary">2 años</span> de garantía</h6>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        

        <div className="container text-center mt-5 ">
            <div className="row">
                <div className="col">
                    <div className="d-flex gap-3 justify-content-center align-items-center ">
                        <i className="bi bi-cpu text-primary fs-2 h1 "></i>
                        <div >
                            <h5 >Características</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex gap-3 justify-content-center align-items-center ">
                        <i className="bi bi-chat-dots text-primary fs-2 h1 "></i>
                        <div >
                            <h5 >Opiniones (5)</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="container text-start mt-5">
            <div className="row gap-5">

                <div className="col w-70 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae expedita laboriosam debitis quidem dolore iure consequuntur eveniet quas perspiciatis. Alias, fugit aut? Sit animi laboriosam labore officia perferendis. Neque, ratione.

                <div className="mt-3">
                    <h3>Características del Producto</h3>
                    <div className="d-flex gap-3 ">
                        <i className="bi bi-funnel text-primary fs-2 h1 "></i>
                        <div >
                            <strong >Gran capacidad.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odit harum mollitia quidem quis minima magnam qui quisquam ipsum blanditiis repudiandae cupiditate sapiente, ipsam exercitationem. Laboriosam corporis esse animi. Dolorum.
                        </div>
                    </div>
                    <div className="d-flex gap-3 ">
                        <i className="bi bi-flag text-primary fs-2 h1 "></i>
                        <div >
                            <strong >Gran capacidad.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odit harum mollitia quidem quis minima magnam qui quisquam ipsum blanditiis repudiandae cupiditate sapiente, ipsam exercitationem. Laboriosam corporis esse animi. Dolorum.
                        </div>
                    </div>
                    <div className="d-flex gap-3 ">
                        <i className="bi bi-wifi text-primary fs-2 h1 "></i>
                        <div >
                            <strong >Gran capacidad.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odit harum mollitia quidem quis minima magnam qui quisquam ipsum blanditiis repudiandae cupiditate sapiente, ipsam exercitationem. Laboriosam corporis esse animi. Dolorum.
                        </div>
                    </div>
                </div>
                </div>

                <div className="col w-20">
                <h4>Especificaciones Mínimas:</h4>
                <ul>
                    <li>Windows 10 como sistema operativo</li>
                    <li>Procesador Intel o Amd de doble núcleo y cuatro hilos</li>
                    <li>6 GB de memoria RAM</li>
                    <li>Tarjeta gráfica GeForce GTX 650 o Radeon HD 7750</li>
                    <li>60 GB de espacio libre</li>
                </ul>
                
                <h4>Requisitos Recomendados: </h4>

                <ul>
                    <li>Windows 10 como sistema operativo</li>
                    <li>Procesador Intel o Amd de cuatro núcleos y ocho hilos</li>
                    <li>8 GB de memoria RAM</li>
                    <li>Tarjeta gráfica GeForce GTX 970 o Radeon RX 570</li>
                    <li>60 GB de espacio libre</li>
                </ul>
                </div>

            </div>
        </div>

        <section className="container d-flex justify-content-between align-items-center  my-5 py-5 ">


            <div className="w-30" >
                <h2>Testimonios de clientes</h2>
                <p>No los mires, únete</p>
                <Button text="Ver todas las opiniones"/>
            </div>


            <div className="w-70">   
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
        
        <div className="container d-flex justify-content-between align-items-center my-3">
        
        <div>
            <h2>Productos relacionados</h2>
            <h6>Los compradores suelen comprar tambíen estos productos</h6>
        </div>
        
      </div>

        <Card cards={card}/>
        <Benefits/>
    </div>
  )
}

export default Detalles