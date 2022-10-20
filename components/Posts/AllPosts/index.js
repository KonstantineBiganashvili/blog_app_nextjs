import React from 'react';
import PostsGrid from '../PostsGrid';
import classes from './AllPosts.module.css';

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
