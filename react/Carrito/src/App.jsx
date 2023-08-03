import { Grid } from "@mui/material";
import AppBar from "./components/AppBar";
import Card from "./components/Card/Card";
import { useCartContext } from "./contexts/CartContext";

function App() {
  const { addToCart } = useCartContext();
  const { removeToCart } = useCartContext();
  return (
    <>
      <AppBar />
      <Grid container spacing={2} pt={4}>
        <Grid item md={3}>
          <Card
            image="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
            name="Leonidas"
            location="Barbate"
            id={2}
            addToCart={addToCart}
            removeToCart={removeToCart}
          />
        </Grid>
        <Grid item md={3}>
          <Card
            image="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
            name="Leonidas"
            location="Barbate"
            id={3}
            addToCart={addToCart}
            removeToCart={removeToCart}

          />
        </Grid>
        <Grid item md={3}>
          <Card
            image="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
            name="Leonidas"
            location="Barbate"
            id={4}
            addToCart={addToCart}
            removeToCart={removeToCart}

          />
        </Grid>
        <Grid item md={3}>
          <Card
            image="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
            name="Leonidas"
            location="Barbate"
            id={5}
            addToCart={addToCart}
            removeToCart={removeToCart}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
