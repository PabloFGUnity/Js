import logo from "../../assets/icons/330942.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg py-4 bg-primary">
      <div className="container gap-3">
        <img src={logo} alt="logoprincipal" width="50px" />
        <a className="navbar-brand " href="#">
          My<span className="text-info">Video</span>Game
        </a>

        <form className="d-flex w-100" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button className="btn btn-outline-light bg-info " type="submit">
            Search
          </button>
        </form>

        <button
          type="button"
          className="btn btn-primary position-relative bg-info text-dark"
        >
          Carrito
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
