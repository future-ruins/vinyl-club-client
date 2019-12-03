import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/records';
import queryString from 'query-string';
import RecordsBoard from './RecordsBoard';

class RecordsBoardContainer extends Component {
  componentDidMount() {
    // const urlQuery = this.props.location.search;
    // console.log('URL QUERY NOT CONVERTED:', urlQuery);
    // console.log('URL QUERY CONVERTED:', queryString.parse(urlQuery));

    const page =
      parseInt(queryString.parse(this.props.location.search).page) || 1;
    this.props.fetchRecords(page);
  }

  render() {
    return (
      <>
        <RecordsBoard records={this.props.records} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

export default connect(mapStateToProps, { fetchRecords })(
  RecordsBoardContainer
);
