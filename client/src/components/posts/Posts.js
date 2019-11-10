import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';

const Posts = props => {
  return <div></div>;
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapSateToProps = state => ({
  post: state.post
});

export default connect(
  mapSateToProps,
  { getPosts }
)(Posts);
