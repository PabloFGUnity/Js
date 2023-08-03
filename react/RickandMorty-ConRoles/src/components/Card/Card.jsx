import { Box, Card as CardMUI } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ name, image, location, id }) {
  return (
    <CardMUI>
      <CardActionArea>
        <Link to={`${id}`}>
          <CardMedia component="img" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography noWrap gutterBottom variant="h5">
              {location}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Box width="100%">
          <Link to={`${id}`}>
            <Button size="small" variant="outlined" color="secondary" fullWidth>
              Ver
            </Button>
          </Link>
        </Box>
      </CardActions>
    </CardMUI>
  );
}
