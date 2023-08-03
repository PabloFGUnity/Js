
function Testimonios() {
  return (
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
    )
}

export default Testimonios