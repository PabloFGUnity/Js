import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Tabs from '../components/Tabs'
import {Box,Grid,Typography} from '@mui/material'

function Home() {
  return (
    <>
        <Grid container>
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
            <Box mt={2} width='100%'>
                <Typography variant='h4' textAlign='center'>
                  Welcome to my casa
                  </Typography>
            </Box>
            <Grid item container >
                {[1,2,3,4,5,6].map((item) => (
                  <Grid item key={item} xs={12} md={4} px={{xs:2, md:0}}>
                    <Cards/>
                  </Grid>
                ))}
            </Grid>
            <Box mt={2} width={'100%'}>
                  <Tabs/>
            </Box>
        </Grid>
      </>
  )
};

export default Home