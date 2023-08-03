
function inicializar()
{
    console.log("onLoad se ha llamado");
    const registerconfimar =new Register()
    registerconfimar.render();
}


function Register() {

    this.render = function() 
    {
        let menuDiv = document.getElementById("register");
        
        menuDiv.innerHTML =`
                            Nombre: <input type="text" id="nombre"/> <br>
                            Apellidos: <input type="text" id="apellidos"/> <br> 
                            Email: <input type="email" id="email"   /> <br> 
                            Contraseña: <input type="password"  id="password" /> <br>
                            Repetir contraseña: <input type="password" id="passwordrep"/> <br>
                            <button  id="registerBoton"  >Register</button>
                            `;

        const loginBoton=document.getElementById("registerBoton")
        loginBoton.addEventListener("click",this.register)
      }; 

    this.register = function()
      { 

        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const passwordrep=document.getElementById("passwordrep").value;
        const nombre=document.getElementById("nombre").value;
        const apellidos=document.getElementById("apellidos").value;
        const result=document.getElementById("result");

        const guardar=window.localStorage;
        const savemail= JSON.parse(guardar.getItem ("usuario")) || [];        
        
        let contiene=false;

        for (let i=0; i<savemail.length;i++)
        { 
          
            if (email === savemail[i].Email)
            {
              contiene = true;
            }
            
        };
            
          if ( nombre !== null &&
            apellidos !== null &&
            email !== null && 
            password !== "" &&
            password === passwordrep &&  
            contiene === false)
        {
            result.innerHTML="<p class=verde>Se ha registrado correctamente</p>";
            console.log("Login correcto");
            savemail.push({Email: email,Contraseña: password});
            guardar.setItem("usuario", JSON.stringify(savemail));

        
        }   else 
            {
                result.innerHTML="<p class=rojo>Algo ha salido mal</p>";
                console.log("Email o contraseña errónea");
            }
        
    };
  
  }
