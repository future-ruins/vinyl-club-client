import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class RecordPage extends Component {
  render() {
    return (
      <>
        <img
          class='centeredImage'
          src={this.props.selectedRecord.img}
          alt='record cover'
          height={300}
          position='center'></img>
        <br />
        <br />
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
          {`Format: ${this.props.selectedRecord.format}"`}
          <br />
          {`Genre: ${this.props.selectedRecord.genre}`}
          <br />
          {'Posted by: '}
          <Link href={`/user/${this.props.selectedRecord.userId}/records`}>
            {this.props.selectedRecord.username}
          </Link>
        </Typography>

        <Typography
          variant='body2'
          align='center'
          color='textPrimary'
          paragraph>
          {this.props.selectedRecord.description}
        </Typography>
      </>
    );
  }
}

export default RecordPage;
