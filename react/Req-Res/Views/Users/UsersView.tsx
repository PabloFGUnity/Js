import { Box } from "@mui/joy"
import Cards from "../../src/components/Cards/Cards"
import {IUser} from "../../src/interfaces/User"
import { Grid } from "@mui/material"
import Stack from '@mui/material/Stack';
import Pagination from '../../src/components/Pagination';
import { ChangeEvent } from "react";

type Props = {
  users: IUser[] | null;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
  total: number;

}


function UsersView({users,page,total,onChange}:Props) {
  return (
    <Box>

      <Grid container>
        {
          users?.map((users) => {
            const {id,first_name,last_name,email,avatar} = users

            return (

            <Grid item xs={4} spacing={2} key={id}>
              <Cards id={id} first_name={first_name} last_name={last_name} email={email} avatar={avatar}/>
            </Grid>

            )
          })
        }
      </Grid>
      <Box>
    <Stack spacing={2}>
      <Pagination total={total} page={page} onChange={onChange} />
      
    </Stack>

    </Box>

    </Box>
  )
}

export default UsersView