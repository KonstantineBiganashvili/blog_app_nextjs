import Head from 'next/head';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../helpers/postsUtil';

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Konstantine's Blog</title>
        <meta name="description" content="I Talk About Tech News" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
};

export default HomePage;
