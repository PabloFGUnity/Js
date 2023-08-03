import { Box, Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import background from "../../assets/rickBg.png";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function CharactersView({
  characters,
  page,
  totalPages,
  onChange,
  onSearch,
  searchValue,
}) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        <SearchBar onChange={onSearch} value={searchValue} />
        <Grid container spacing={3}>
          {characters?.results.map((character) => {
            const { name, image, id, location } = character;
            return (
              <Grid item xs={12} md={3} key={id}>
                <Card
                  id={id}
                  name={name}
                  image={image}
                  location={location.name}
                />
              </Grid>
            );
          })}
        </Grid>
        <Pagination totalPages={totalPages} page={page} onChange={onChange} />
      </Box>
    </Box>
  );
}
