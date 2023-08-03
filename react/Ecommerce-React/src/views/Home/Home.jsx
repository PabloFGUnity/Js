import Button from '../../components/Button';
import Benefits from '../../components/Benefits';
import { useState } from "react";
import { useTranslation } from "react-i18next";



function Home() {
    const { t, i18n } = useTranslation();
    const [isLogged, setLogged]=useState(false);

    console.log(isLogged);
    function Logearse()
    {
        setLogged(!isLogged)
    }   

    function handleLanguage() {
        i18n.language === "es"
          ? i18n.changeLanguage("en")
          : i18n.changeLanguage("es");
      }

  return (
    <>
    
    <div className="container mt-5 text-center">
        <div className="row">
            <div className="col">
                <div>
                <p
          dangerouslySetInnerHTML={{ __html: t("title", { name: "Nacho" }) }}
        />
            <select className="form-select" aria-label="Default select example">
                <option selected>Elige el idioma</option>
                <option value="1">Español</option>
                <option value="2">Ingles</option>
            </select>
            <p>Idioma actual: {i18n.language}</p>
            <button onClick={handleLanguage}>Cambiar idioma</button>
                </div>
                    <div className="w-100 ">
                        <h2 className="m-2">Inica sesión</h2>
                        <p className="m-2 h5">Accede con tus datos anteriores</p>

                        <input
                            type="email"
                            className=" input-group-text  text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2  placeholder col-12 bg-light"
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />

                        <input
                            type="text"
                            className="  input-group-text text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light"
                            placeholder="Contraseña"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />

                        <Button className="m-2" text="Iniciar Sesión" onclick={Logearse}/>
                    </div>
            </div>

            <div className="col">
                <div className="w-100">   
                    <div className="text-start border border-2 border-primary rounded-4 p-5 ">

                        <h2 className="m-2" id='Registro'>Registrate
                        </h2>
                        <p className="m-2 h5">Crea una cuenta en My Releevant Store para conseguir tu primer descuento como cliente</p>
                        
                            <div className="m-2 gap-5  d-flex">
                                <input type="text" className=" input-group-text  text-start  col-sm-4 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light " placeholder="Nombre" aria-label="Recipient's username"  aria-describedby="button-addon2"/>

                                <input type="text" className=" input-group-text  text-start  col-sm-4 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light " placeholder="Apellido" aria-label="Recipient's username"  aria-describedby="button-addon2"/>

                            </div>
                        
                        <input type="email" className=" input-group-text  text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2  placeholder col-12 bg-light" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        
                        <input type="text" className="  input-group-text text-start m-2 col-sm-10 bg-light-subtle border border-light-subtle rounded-2 placeholder col-12 bg-light" placeholder="Contraseña" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        
                        <Button className="m-2" text="Register" />
                        

                    </div>
                </div>  
            </div>
        </div>
    </div>
    <Benefits/>

    </>
  )
}

export default Home