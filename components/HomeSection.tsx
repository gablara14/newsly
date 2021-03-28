import Components from "../styles/Components.module.css";
import styles from "../styles/Home.module.css";
export interface HomeSectionProps {
  title: string;
  text: string;
  image: any;
  imageSide: "left" | "right";
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  text,
  image,
  imageSide,
  children,
}) => {
  return (
    <div
      className={
        imageSide === "left"
          ? styles.homeSectionContainer
          : styles.homeSectionContainerRight
      }
    >
      <div>{imageSide === "left" && children}</div>
      <div className={styles.homeSectionBody}>
        <div style={{ marginBottom: 10 }}>
          <h2 className={styles.subTitleHome}>{title}</h2>
        </div>
        <div>
          <p className={styles.normalText}>{text}</p>
        </div>
      </div>
      <div>{imageSide === "right" && children}</div>
    </div>
  );
};

export default HomeSection;
