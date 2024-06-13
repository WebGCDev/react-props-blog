import React from 'react';
import { posts } from './posts';
import Post from './components/Post';
import TagList from './components/TagList';
import styles from './App.module.css';

function App() {
  const publishedPosts = posts.filter((post) => post.published);
  const allTags = posts.map((post) => post.tags);

  return (
    <div className={styles.app}>
      <h1>Blog Volleyball Players</h1>
      {publishedPosts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          image={post.image}
          content={post.content}
          tags={post.tags}
        />
      ))}
      <TagList tags={allTags} />
    </div>
  );
}

export default App;
