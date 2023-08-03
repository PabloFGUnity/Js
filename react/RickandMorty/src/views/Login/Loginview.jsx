import { Alert, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import {useLogearseContext} from "../../Contexts/UiLogearse";


function Loginview({auth,onChange,onSubmit}) {  

  const {errorMessage} = useLogearseContext();
  console.log("Render de Boton");
  

  return (
    <Box >
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            
        >
          <h2>Sign in</h2>
          <form onSubmit={onSubmit}>
            
          <Grid >
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                '--FormLabel-color': theme.vars.palette.primary.plainColor,
              })}
            >
              Email
            </FormLabel>
            <Input
              sx={{ '--Input-decoratorChildHeight': '45px' }}
              placeholder="@email.com"
              name="email"
              required
              value={auth.email}
              onChange={onChange}
            />
          </FormControl>

          </Grid>

          <Grid sx={{ marginTop: '10px' }}>
          <FormControl>
              <Stack
              spacing={0.5}
              
            >
                <FormLabel
                  sx={(theme) => ({
                    '--FormLabel-color': theme.vars.palette.primary.plainColor,
                  })}
                >
                  Password
                </FormLabel>
                <Input
                  sx={{ '--Input-decoratorChildHeight': '45px' }}
                  placeholder="password"
                  type="password"
                  name="password"
                  value={auth.password}
                  onChange={onChange}
                  required
                />

            

              </Stack >
            </FormControl>

          </Grid>
          {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}

          <Grid sx={{ marginTop: '10px' }}>
            
            <Button type="submit"> Sign in</Button>
            
          </Grid>
          </form>

        </Grid>  


    </Box>
  )
}

export default Loginview