import { Box, Card as CardMUI } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Card({ id, name, image, location, addToCart, removeToCart }) {
  return (
    <CardMUI>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography noWrap gutterBottom variant="h5">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box width="100%">
          <Button
            onClick={() => addToCart({ id, name, image, location })}
            size="small"
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Añadir al carrito
          </Button>
          <Button
           onClick={() => removeToCart(id)}
            size="small"
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Eliminar del carrito
            </Button>
        </Box>
      </CardActions>
    </CardMUI>
  );
}
