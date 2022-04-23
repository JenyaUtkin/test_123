import React from 'react'
import {ListItemIcon, Grid} from '@mui/material';

export default function Time() {
  const [time, setTime] = React.useState(0)

  React.useEffect(()=>{
    setInterval(() => {
      setTime(new Date().toLocaleString().slice(11))

    }, 1000)
  },[])
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    >
    <ListItemIcon sx={{ fontSize: 40 }}>Time - {time}</ListItemIcon>
    </Grid>
  )
}
