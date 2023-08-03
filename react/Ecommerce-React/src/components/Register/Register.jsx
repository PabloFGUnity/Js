
function Register() {
  return (
    <div className="w-100">   
                <div className="text-start border border-2 border-primary rounded-4 p-5 ">

                  <h2 className="m-2">Registrate
                  </h2>
                  <p className="m-2 h5">Crea una cuenta en My Releevant Store para conseguir tu primer descuento como cliente</p>
                  
                    <div className="m-2 gap-5  d-flex">
                        <input type="text" className=" input-group-text  text-start  col-sm-4 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light " placeholder="Nombre" aria-label="Recipient's username"  aria-describedby="button-addon2"/>

                        <input type="text" className=" input-group-text  text-start  col-sm-4 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light " placeholder="Apellido" aria-label="Recipient's username"  aria-describedby="button-addon2"/>

                    </div>
                
                  <input type="email" className=" input-group-text  text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2  placeholder col-12 bg-light" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                
                  <input type="text" className="  input-group-text text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light" placeholder="Contraseña" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  
                  <a href="#" className="btn btn-primary m-2">Register</a>
                </div>
     </div>  
            
  )
}

export default Register