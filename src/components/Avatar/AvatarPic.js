import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: 70,
      height: 70,
      marginBottom:20
    },
  }));

const AvatarPic = (props)=> {
    const avatarUrl = props
    
    const classes = useStyles();

    return (
        <Avatar alt="user avatar" src={avatarUrl.avatarUrl} className={classes.large} />
    )
}
export default AvatarPic