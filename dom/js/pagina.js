function inicializar()
{
    console.log("onLoad se ha llamado");

    const divContainer=document.getElementById("users");

      divContainer.innerHTML += "<ul>";

    for (const item of users)
    {
        divContainer.innerHTML += `<li>Nombre: ${item.name},Edad: ${item.age}</li>`
        
    }

    divContainer.innerHTML += "</ul>";

   // menu
   const menu = new Menu([{url: "index.html", etiqueta: "Home"},
                          {url: "login.html", etiqueta: "Login"},
                          {url: "registro.html", etiqueta: "Register"}]);
   menu.render();

  // usuarios
   const usuarios= new Users([
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ]);
  usuarios.render()

}

function Users(usuario) {
  // propiedades
  this.usuario = usuario;

  // metodos
  
      this.render = function() {
      let menuDiv = document.getElementById("usuarios");
      
      menuDiv.innerHTML+= "<ul>"

      for (const item of this.usuario)
      {
        
        menuDiv.innerHTML +=`<li>${item.name},${item.age}</li>`;

      }  
      
      menuDiv.innerHTML+="</ul>"

    };

}

function Menu(link) {
  // propiedades
  this.link = link;

  
  // metodos
  
      this.render = function() {
      let menuDiv = document.getElementById("menu");
      
      for (const item of this.link)
      {
        
        menuDiv.innerHTML +=`<a href='${item.url}' >${item.etiqueta}</a> `;

      }  
      
    };

}


function login(){
    console.log("Boton login clickado");

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const result=document.getElementById("result")
    if (email === "pabloporteroas@gmail.com" && password === "1234")
    {
        result.innerHTML="<p class=verde>Se ha registrado correctamente</p>";
        console.log("Login correcto");
    }   else
        {
            result.innerHTML="<p class=rojo>Algo ha salido mal</p>";
            console.log("Email o contraseña errónea");
        }
    
    
    
}


const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];