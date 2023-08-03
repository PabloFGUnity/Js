import { TextField, Alert, Button, Typography } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginView({ auth, onChange, onSubmit }) {
  const { errorMessage } = useAuthContext();
  return (
    <form onSubmit={onSubmit}>
      <Typography variant="h3">Inicia sesión</Typography>
      <TextField
        name="email"
        value={auth.email}
        onChange={onChange}
        label="Email"
        size="small"
      />
      <TextField
        name="password"
        value={auth.password}
        onChange={onChange}
        label="Password"
        size="small"
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button type="submit" variant="contained" color="secondary">
        Iniciar sesión
      </Button>
    </form>
  );
}
