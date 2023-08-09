import {IUser} from "../../interfaces/User"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



function Cards({id,first_name,last_name,email,avatar}:IUser) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={avatar}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {last_name},{email}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`${id}`}>
        
        <Button size="small">Detalle</Button>
        </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Cards