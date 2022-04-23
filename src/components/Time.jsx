import React from 'react'
import {Button, Grid} from '@mui/material';

export default function Time() {
  const [time, setTime] = React.useState(0)

  React.useEffect(()=>{
    setInterval(() => {
      setTime(new Date().toLocaleString())

    }, 1000)
  },[])
  return (
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
      <Button variant="contained">
        {time}
      </Button>
    </Grid>
  )
}
