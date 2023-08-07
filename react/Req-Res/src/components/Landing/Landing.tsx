import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }} justifyContent={'center'}>
        <Link to="/Users">
            <Button variant="solid">Ve a ver los usuarios</Button>
        </Link>
    </Box>

  )
}

export default Landing