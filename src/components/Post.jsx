import React from 'react';
import styles from './Post.module.css';

const tagColors = {
  html: 'orange',
  css: 'blue',
  js: '#efdb4f',
  php: '#787cb4',
};

const Post = ({ title, content, tags, image }) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <img
        src={`${image || 'https://placehold.co/600x400'}`}
        alt={title}
        className={styles.image}
      />
      <p>{content}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={styles.tag}
            style={{ backgroundColor: tagColors[tag] }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
