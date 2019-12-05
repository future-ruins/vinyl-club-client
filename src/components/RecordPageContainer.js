import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneRecord } from '../actions/records';
import RecordPage from './RecordPage';

class RecordPageContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchOneRecord(id);
  }

  render() {
    return <RecordPage selectedRecord={this.props.currentRecord} />;
  }
}

const mapStateToProps = state => ({
  currentRecord: state.recordsData,
});

export default connect(mapStateToProps, { fetchOneRecord })(
  RecordPageContainer
);
