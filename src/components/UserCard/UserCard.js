import React from 'react'
import Avatarka from '../Avatar/AvatarPic';
import { Box, makeStyles, Tooltip, Typography, withStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection:'column',
      width:216,
      marginBottom:41,
      backgroundColor: '#f9f9f3',
      whiteSpace:'nowrap',
    },
    avatar:{
      marginBottom: 24
    },
    name:{
      whiteSpace:'normal',
      width: '100%',
      textAlign: 'center',
      fontSize:24,
      marginBottom: 24,
      color: '#212529',
      fontFamily:'OpenSans, sans-serif'



    },
    position:{
      fontSize:16,
      marginBottom: 15,
      color: '#4c4b4b',
      fontFamily:'OpenSans, sans-serif'

    },
    email:{
      fontSize:16,
      marginBottom: 12,
      width: '100%',
      textAlign: 'center',
      color: '#4c4b4b',
      fontFamily:'OpenSans, sans-serif'

    },
    phone:{
      fontSize:16,
      color: '#4c4b4b',
      fontFamily:'OpenSans, sans-serif'


    }

    
  }));
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'rgb(45, 45, 45)',
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);

const UserCard = (props)=> {
  
    const {name,email,phone,position,photo} = props // can also take id and regtime 
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Avatarka className={classes.avatar} avatarUrl={photo}/>
                <LightTooltip className={classes.tooltip} title={name}>
                      <Box className={classes.name} textOverflow="ellipsis" overflow="hidden" component="div">{name}</Box>
                </LightTooltip>
                
                <Typography className={classes.position} >{position}</Typography>
                <LightTooltip className={classes.tooltip} title={email}>
                  <Box className={classes.email} textOverflow="ellipsis" overflow="hidden" component="div">{email}</Box>
                </LightTooltip>
                <Typography className={classes.phone}>{phone}</Typography>
            </div>
    )
}
export default UserCard