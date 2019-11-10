import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const PostItem = () => {
  return <div></div>;
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { PostItem }
)(PostItem);
