import React from "react";
import styles from "../styles/Posts.module.css";

interface PostContainerProps {
  title: string;
}

const PostContainer: React.FC<PostContainerProps> = ({ children, title }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postContainerTitle}>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default PostContainer;
