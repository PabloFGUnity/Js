function Login() {
  return (
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

      <a href="#" className="btn btn-primary m-2">
        Inicar sesión
      </a>
    </div>
  );
}

export default Login;
