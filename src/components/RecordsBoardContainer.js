import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/records';
import queryString from 'query-string';
import RecordsBoard from './RecordsBoard';
import Grid from '@material-ui/core/Grid';

class RecordsBoardContainer extends Component {
  componentDidMount() {
    const page =
      parseInt(queryString.parse(this.props.location.search).page) || 1;
    this.props.fetchRecords(page);
  }

  // Pagination
  pagination = pages => {
    if (pages <= 1) {
      return;
    }
    const pagination = [];
    for (let i = 1; i <= pages; i++) {
      pagination.push(
        <Link
          to={`?page=${i}`}
          key={i}
          style={{ margin: '5px', padding: '5px', align: 'center' }}>
          {i}
        </Link>
      );
    }
    return pagination;
  };

  // Compare and handle the url query change
  componentDidUpdate(prevProps) {
    const newPageNum = queryString.parse(this.props.location.search).page;
    const oldPageNum = queryString.parse(prevProps.location.search).page;
    if (newPageNum !== oldPageNum) {
      // If the url query is different we need to update the Board
      this.props.fetchRecords(newPageNum);
    }
  }

  render() {
    return (
      <>
        <RecordsBoard records={this.props.recordsData.rows} />
        <Grid container spacing={4} justify='center'>
          <Grid item>{this.pagination(this.props.recordsData.pages)}</Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => ({
  recordsData: state.recordsData,
});

export default connect(mapStateToProps, { fetchRecords })(
  RecordsBoardContainer
);
