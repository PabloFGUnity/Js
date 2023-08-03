import { Outlet } from "react-router-dom";



export default function Layout() {
  return (
    <main>
      <header>
        <h1>Welcome to React Router V6.4+</h1>
      </header>
      <Outlet/>
    </main>
  );
}
