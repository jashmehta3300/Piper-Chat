import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import TextField from '@material-ui/core/TextField';

function iconStyles() {
  return {
    successIcon: {
      color: 'white',
    },
    errorIcon: {
      color: 'white',
    },
    camIcon: {
      color: 'white'
    }
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    backgroundColor: '#2196f3',
    height: '30vh',
  },
  setSize: {
    height: 100,
    width: 100,
  },
  appbar: {
    marginTop: 0,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  pic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cam: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  form: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
  },
  button: {
    marginTop: '30px'
  },
}));

function ProfilePage(props){
  const classes = useStyles();
  const classes123 = makeStyles(iconStyles)();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Toolbar className={classes.appbar}>
            <Grid item xs={2}>
              <CloseIcon fontSize="large" className={classes123.errorIcon} />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.title}>
                Profile
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <DoneIcon fontSize="large" className={classes123.successIcon} />
            </Grid>
          </Toolbar>
          <Grid item xs={12} className={classes.pic}>
            <Avatar className={classes.setSize} src="/iamges.png" />
          </Grid>
          <Grid item xs={12} className={classes.cam}>
            <CameraAltIcon fontSize="medium" className={classes123.camIcon} />
            <span className={classes.title}>Add Image</span>
          </Grid>
        </Paper>
        <Grid item xs={12}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Name"
                name="userName"
                size="small"
                // onChange={handleChange('email')}
              />
              <TextField
                variant="outlined"
                margin="none"
                required
                fullWidth
                name="userEmail"
                label="Email id"
                type="userEmail"
                id="userEmail"
                size="small"
                // onChange={handleChange('password')}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                // onClick={submitHandler}
              >
                Update
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default ProfilePage;
