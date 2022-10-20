import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './PostItem.module.css';

const PostItem = (props) => {
  const { post } = props;
  const { title, image, excerpt, date, slug } = post;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imgPath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              alt={title}
              src={imgPath}
              width="300px"
              height="200px"
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{readableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
