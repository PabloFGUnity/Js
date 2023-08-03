import Layout from "./components/Layout";
import Home from "./views/Home"
import Products from "./views/Productos"
import NotFound from "./views/NotFound";
import Politica from "./views/Politica";
import Micarrito from "./views/Carrito";
import "./App.css";
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    
     <Routes>
        <Route path="/" element={<Layout withUser/>}>

            <Route index element={<Home/>}/>
            
            <Route path="products" >
              <Route index element={<Products/>}/>
              {/* Poner : para que sea dinámico*/}
              {/* <Route path=":id" element={<Detalles/>}/> */}
            </Route>
            <Route path="politica" element={<Politica/>}/>
            <Route path="carrito" element={<Micarrito/>}/>
        </Route>

        {/* <Route path="/" element={<Layout  />}> */}

        
        <Route path="*" element={<NotFound/>}/>
        {/* Poner el otro nav fuera del grupo de la barra para que sea diferente*/}
     </Routes>
      
    
  );
}

export default App;
