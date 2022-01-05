import React from 'react';
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();
  return <div className={classes.grid}>Post</div>;
};

export default Post;
