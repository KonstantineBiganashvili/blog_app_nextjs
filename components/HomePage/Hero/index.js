import Image from 'next/image';
import React from 'react';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="blogger"
          src={'/images/site/kote.jpeg'}
          width="300px"
          height="300px"
        />
      </div>
      <h1>Hi, I&apos;m Konstantine</h1>
      <p>
        I blog about web development (ReactJS, NextJS, NodeJS), video games,
        music and general tech news.
      </p>
    </section>
  );
};

export default Hero;
