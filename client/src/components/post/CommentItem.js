import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CommentItem = ({
  id,
  comment: { _id, text, name, avatar, user, date },
  auth
}) => {
  return <div></div>;
};

CommentItem.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CommentItem);
