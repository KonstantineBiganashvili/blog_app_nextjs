import Head from 'next/head';
import PostContent from '../../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../../helpers/postsUtil';

const Post = (props) => {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },

    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace('.md', ''));

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
};

export default Post;
