import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchOneRecord } from '../actions/records';
import RecordPage from './RecordPage';
import request from 'superagent';
const baseURL = 'http://localhost:4000';

class RecordPageContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    request(`${baseURL}/record/${id}`)
      .then(response => {
        console.log('response.body getOneRecord', response.body);
      })
      .catch(console.error);
  }

  render() {
    return <RecordPage recordInfo={this.props} />;
  }
}

const mapStateToProps = state => ({
  recordInfo: state,
});

export default connect(mapStateToProps, null)(RecordPageContainer);
