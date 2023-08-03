import imagen from "../../assets/images/batman.png"
function Detalle() {


  return (
    
    <div className="container d-flex p-3 gap-3">

        <img src={imagen} className="w-100 rounded-4" alt="..."/>

        <div className="w-90 card border-0 mt-5" >

              <h2 className="mx-auto p-2">Titulo del producto
              </h2>
              <p className=" mx-auto p-2">Accede con tus datos anteriores wefwefwewe rqwr qwr qwr qwr qwr qwr qwr qwr qwr qgweg 4rewt ewrqwrqw iqwue iquwhr iquw</p>

              <p className=" p-2 text-start"><span>234.34<i className="bi bi-currency-euro text-warning"></i></span></p>
                                      
              <a href="#" className="btn btn-primary m-2">Inicar sesión</a>
              
            </div>
        </div>

    
  )
}

export default Detalle