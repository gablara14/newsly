import Link from "next/link";
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
  const renderedTitle =
    title.length < 100 ? title : title.slice(0, 100) + "...";
  const renderedSubTitle =
    subTitle.length < 100 ? subTitle : subTitle.slice(0, 100) + "...";

  const renderedResponsiveTitle =
    title.length < 40 ? title : title.slice(0, 40) + "...";

  return (
    <Link href="/admin/posts/2">
      <a>
        <div className={styles.post}>
          <div className={styles.postImage} />
          {/* image */}

          <div className={styles.postBody}>
            <h2 className={styles.postTitle}>{renderedTitle}</h2>
            <h2 className={styles.postResponsiveTitle}>
              {renderedResponsiveTitle}
            </h2>
            <p className={styles.postSubtitle}>{renderedSubTitle}</p>
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
      </a>
    </Link>
  );
};
export default Post;
