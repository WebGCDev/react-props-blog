import React from 'react';
import styles from './TagList.module.css';

const tagClasses = {
  html: styles['tag-html'],
  css: styles['tag-css'],
  js: styles['tag-js'],
  php: styles['tag-php'],
};

const TagList = ({ tags }) => {
  const uniqueTags = [...new Set(tags.flat())];

  return (
    <div className={styles.tagList}>
      <h3>Tags Distinti:</h3>
      <div>
        {uniqueTags.map((tag) => (
          <span key={tag} className={`${styles.tag} ${tagClasses[tag]}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
