import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class RecordPage extends Component {
  render() {
    return (
      <>
        <Container maxWidth='sm'>
          <Grid
            container
            direction='column'
            justify='center'
            spacing={14}
            alignItems='center'>
            <img src={this.props.selectedRecord.img} alt='record cover'></img>

            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              {this.props.selectedRecord.title}
            </Typography>

            <Typography
              variant='body2'
              align='center'
              color='textSecondary'
              paragraph>
              Format: {`${this.props.selectedRecord.format}"`}
              <br />
              Genre: {this.props.selectedRecord.genre}
            </Typography>

            <Typography
              variant='body2'
              align='center'
              color='texttextPrimary'
              paragraph>
              {this.props.selectedRecord.description}
            </Typography>
          </Grid>
        </Container>
      </>
    );
  }
}

export default RecordPage;
