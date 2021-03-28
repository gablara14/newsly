import React from "react";
import styles from "../styles/Posts.module.css";

interface PostProps {
  title: string;
  subTitle: string;
  authorName: string;
  publishDate: string;
  readingTime: string;
}

const Post: React.FC<PostProps> = ({
  title,
  subTitle,
  authorName,
  publishDate,
  readingTime,
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.postImage} />
      {/* image */}

      <div className={styles.postBody}>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postSubtitle}>{subTitle}</p>
        <div>
          <p className={styles.postFooter}>
            <span className={styles.postAuthor}>{authorName}</span>
            <span className={styles.postDate}>
              , {publishDate} - {readingTime}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Post;
