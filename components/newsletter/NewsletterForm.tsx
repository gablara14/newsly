import React from "react";
import styles from "../../styles/Newsletter.module.css";
// PROVISORY IMPORTS
import SignButton from "../sign/SignButton";
import SignField from "../sign/SignField";
//

interface NewsletterFormProps {
  username: string | string[];
  description: string;
  imageSrc: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  username,
  description,
  imageSrc,
}) => {
  return (
    <div>
      <div style={{ maxWidth: 460 }}>
        {/* <img src={imageSrc} className={styles.newsletterInfoContainer} alt=""/> */}
        <div className={styles.newsletterInfoContainer}>
          <div className={styles.newsletterImage} />
          <h1 className={styles.newsletterTitle}>{username}</h1>
          <p className={styles.newsletterDescription}>{description}</p>
        </div>
        <div className={styles.newsletterFooter}>
          <div style={{ marginBottom: 20 }}>
            <SignField label="" placeHolder="Digite o seu email" />
          </div>
          <div>
            <SignButton text="Inscrever-se" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
