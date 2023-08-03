import { Skeleton } from "@mui/material";

export default function CharacterDetailView({ character }) {
  return (
    <>
      {character ? (
        <img src={character.image} alt={character.name} />
      ) : (
        <Skeleton
          sx={{
            backgroundColor: "#eee",
          }}
          variant="rectangular"
          width={410}
          height={310}
        />
      )}
    </>
  );
}
