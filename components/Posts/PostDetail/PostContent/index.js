import React from 'react';
import PostHeader from '../PostHeader';
import ReactMarkdown from 'react-markdown';
import classes from './PostContent.module.css';
import Image from 'next/image';
import { PrismLight as SyntaxHighliter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import jsh from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import cssh from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighliter.registerLanguage('js', jsh);
SyntaxHighliter.registerLanguage('css', cssh);

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img(img) {
    //   return <Image src={img.src} alt={img.alt} width={600} height={300} />;
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const img = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={img.properties.src}
              alt={img.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;

      const language = className.replace('language-', '');

      return (
        <SyntaxHighliter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
