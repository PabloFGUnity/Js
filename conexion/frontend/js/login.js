let loginForm;

function inicializar() {
    loginForm = new FormularioLogin()
    loginForm.render();

    const localStorage = window.localStorage;
    localStorage.setItem("usuario", "[{'email': 'mail@mail.com', 'password': '1234'}]");
    console.log(localStorage.getItem("usuario"));
}

function FormularioLogin() {
    this.render = function() {
        const formularioLoginDiv = document.getElementById("formulario-login");
        formularioLoginDiv.innerHTML = `<input type="email" id="email" />
            <input type="password" id="password" />
            <button onclick="loginForm.login()">Login</button>`;
    },
    
    this.login = function() {
        console.log("Boton login clickado");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, password: password})
        })
        .then((response) => {
            if (response.ok) {
                console.log("Usuario logueado");    
            } else {
                console.log("Usuario no valido");    
            }
        })
        .catch((error) => {
            console.log("Usuario no valido");
        });
    }
}