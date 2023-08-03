import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }} justifyContent={'center'}>
        <Link to="/Login">
        
      <Button variant="solid">Ve a logearte</Button>
        </Link>
      <Button variant="outlined">No hace nada</Button>
    </Box>

  )
}

export default Landing