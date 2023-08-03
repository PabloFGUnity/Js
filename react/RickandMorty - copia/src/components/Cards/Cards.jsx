import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';


export default function MediaCard({item}) {
  return (  
    <Card sx={{ maxWidth: 375 }}>
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={item.image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.gender}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`${item.id}`} >Detalle</Link></Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
  );
}