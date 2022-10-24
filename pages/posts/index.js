import Head from 'next/head';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../helpers/postsUtil';

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All Tech News" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
