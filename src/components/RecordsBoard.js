import React, { Component } from 'react';
import '../App.css';
import RegisteredUserMenu from './RegisteredUserMenu';
import SearchAppBar from './SearchAppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const classes = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default class RecordsBoard extends Component {
  render() {
    const records = this.props.records;
    const cards = records;
    console.log('cards', cards);

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth='md' align='right'>
              <RegisteredUserMenu></RegisteredUserMenu>
            </Container>

            <Container maxWidth='sm'>
              <Typography
                component='h1'
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom>
                Records
              </Typography>

              <Typography
                variant='body2'
                align='center'
                color='textSecondary'
                paragraph>
                Check the records that are up for exchange. Click on a record to
                see detailed info.
              </Typography>

              {/* <Button
                type='submit'
                variant='outlined'
                color='primary'
                className={classes.submit}>
                Add record
              </Button> */}
            </Container>
          </div>

          <Container maxWidth='xs'>
            <SearchAppBar></SearchAppBar>
          </Container>

          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {!cards && 'Loading...'}
              {cards &&
                cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        component='img'
                        alt='record cover'
                        height='140'
                        image={`${card.img}`}
                        title='Title'
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {card.title}
                        </Typography>
                        <Typography>{card.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size='small'
                          color='primary'
                          href={`/record/${card.id}`}
                          currentcard={card.id}>
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
          <div className={classes.heroButtons}></div>
        </main>
      </React.Fragment>
    );
  }
}
