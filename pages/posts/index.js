import AllPosts from '../../components/Posts/AllPosts';

const AllPostsPage = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.jpg',
      excerpt: 'NextJS is a fullstack react framework',
      date: '2022-10-20',
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.jpg',
      excerpt: 'NextJS is a fullstack react framework',
      date: '2022-10-20',
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.jpg',
      excerpt: 'NextJS is a fullstack react framework',
      date: '2022-10-20',
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.jpg',
      excerpt: 'NextJS is a fullstack react framework',
      date: '2022-10-20',
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
