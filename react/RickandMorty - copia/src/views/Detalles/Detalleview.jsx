import CardsDetalle from '../../components/Cards/CardsDetalle'
import Grid from '@mui/material/Grid';




export default function Detalleview({characters}) {
console.log(characters);
//Aqui es como se ven las tarjetas <Cards nombre{nombre}/>

  return (
    < >
    <Grid container >
      
            
        <CardsDetalle item={characters}  />           
             
            
    </Grid>
    
    </>
  );
}
