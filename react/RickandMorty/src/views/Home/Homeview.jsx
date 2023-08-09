import Cards from '../../components/Cards'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PaginationUI from '../../components/Pagination/Pagination';
import { Box } from '@mui/material';
import Button from '@mui/joy/Button';
// import { useUiModeContext } from "../../Contexts/UiModeContext";
import {useLogearseContext} from "../../Contexts/UiLogearse";



export default function   Homeview({characters,total,pages,onChange}) {
  // const { toggleUiMode } = useUiModeContext();

      const {logout} = useLogearseContext();

//Aqui es como se ven las tarjetas <Cards nombre{nombre}/>

  return (
    < >
    <Grid container >
      
            {characters ? (
              characters.results.map((personaje) => 
                <Grid item xs={4} spacing={2} key={personaje.id}>               
                <Cards item={personaje} />           
                </Grid>
              )
            ) : (
              <p>Cargando usuarios</p>
            )};
            
    </Grid>
    <Box>
    <Stack spacing={2}>
      <PaginationUI total={total} pages={pages} onChange={onChange} />
      <Grid sx={{ marginTop: '10px' }}>
            
            <Button onClick={logout}> Log out</Button>
            
          </Grid>
    </Stack>

    </Box>
    
    </>
  );
}
