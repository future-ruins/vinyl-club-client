import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from '../actions/records';
import UserCollection from './UserCollection';

class UserCollectionContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchCollection(id);
    console.log('hello');
  }

  render() {
    return (
      <>
        <UserCollection
          records={this.props.recordsData.records}
          collectionOwner={this.props.recordsData.username}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  recordsData: state.recordsData,
});

export default connect(mapStateToProps, { fetchCollection })(
  UserCollectionContainer
);
