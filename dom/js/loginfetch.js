let loginconfimar;
function inicializar()
{
    console.log("onLoad se ha llamado");
    loginconfimar =new Loginclase()
    loginconfimar.render();

    
};


function Loginclase() {

    this.render = function() 
    {
        let menuDiv = document.getElementById("login");
        
        menuDiv.innerHTML =` 
                            Email: <input type="email" id="email"/> <br> 
                            Contraseña: <input type="password" id="password"/>
                            <button onclick=loginconfimar.login()>Login</button>
                            `;

        
      }; 

    this.login = function()
      { 
        console.log("boton dado");
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;

        fetch("http://localhost:3000/login", {
            method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email,password: password})
        })
        .then((response) =>{
            console.log(response);
            if(response.ok) {
                console.log("Usuario logeado");
            }   else  {
                console.log("Usuario no logeado");
            }
        }).catch((error) => {
                console.log("Usuario no valido");
        });
   
  
  }}

  