

function inicializar()
{
    console.log("onLoad se ha llamado");
    const loginconfimar =new Loginclase()
    loginconfimar.render();

    const localstorage= window.localStorage;
    console.log(localstorage.getItem("usuario"));
}

function Loginclase() {

    this.render = function() 
    {
        let menuDiv = document.getElementById("login");
        
        menuDiv.innerHTML =` 
                            Email: <input type="email" id="email"/> <br> 
                            Contraseña: <input type="password" id="password"/>
                            <button id="loginBoton" onclick="login()">Login</button>
                            `;

        const loginBoton=document.getElementById("loginBoton")
        loginBoton.addEventListener("click",this.login)
      }; 

    this.login = function()
      { 

        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const result=document.getElementById("result")

        

        
        // for (let i=0; i<savemail.length ; i++)
        {   if (email === correo && password === contra)
            {
                result.innerHTML="<p class=verde>Se ha logeado correctamente</p>";
                console.log("Login correcto");
            }   else
                {
                    result.innerHTML="<p class=rojo>Algo ha salido mal</p>";
                    console.log("Email o contraseña errónea");
                }
        }
        } 
  
  }

  