import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  title: {
    flexGrow: 1,
    padding: '20px',
    marginLeft: '80px',
  },
  margin: {
    height: '60px',
  },
  contentTitle: {
    marginTop: '150px',
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    marginBottom: '60px',
    textAlign: 'center',
    color: 'grey',
  },
  main: {
    textAlign: 'center',
    color: 'green'
  }
}));

function Home() {
  const classes = useStyles();

    const [mailId, setMailId] = React.useState({
      email: '',
      success: false
    });

    function notify(text, type) {
      switch (type) {
        case 'info':
          toast.info(`🦄${text}`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          break;
        case 'error':
          toast.error(`🦄${text}`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          break;
      }
    }

    const handleChange = (prop) => (event) => {
      setMailId({
        [prop]: event.target.value,
      });
    };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {email:mailId.email}
    const reqBody = JSON.stringify(data)

    fetch('http://localhost:5000/api/v1/auth/sendInvite', {
      method: 'POST',
      body: reqBody,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res=>res.json())
    .then((resData) => {
      console.log(resData)
      if(resData.success === true){
        setMailId({email: '',success: true})
        notify('  Thankyou for sharing!', 'info');
      } else {
        notify('  Please retry', 'error');
      }
    })
    .catch(err=>console.log(err))    
  
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Piper Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.contentTitle}>
              Sorry, it's invite only.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.content}>
              Give us your email address and we will try to get you in!
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              id="outlined-required"
              label="Email id"
              value={mailId.email}
              variant="outlined"
              fullWidth="true"
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              endIcon={<SendRoundedIcon>Sign Up</SendRoundedIcon>}
              onClick={submitHandler}
            >
              send
            </Button>
          </Grid>
          {(mailId.success)?<Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.main}>
              We have recorded your response. We will drop a mail as soon as possible ...
            </Typography>
          </Grid>: null}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;