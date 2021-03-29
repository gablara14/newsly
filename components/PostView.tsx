import Link from "next/link";
import React from "react";
import styles from "../styles/Post.module.css";

interface PostViewProps {
  adminView?: boolean;
}

const PostView: React.FC<PostViewProps> = ({ adminView }) => {
  return (
    <div className={styles.postContainer}>
      {adminView ? null : (
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfoWrap}>
            {/* IMG */}
            <div className={styles.userPicture} />
            <div className={styles.userInfo}>
              <h2>Technoking</h2>
              <p>24 de dezembro de 2020</p>
            </div>
            <div className={styles.userInfoButtonContainer}>
              <Link href="/newsletter/das">
                <a>Me Inscrever</a>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className={styles.postHeader}>
        <h1 className={styles.postTitle}>
          As donas de casa indianas estão ganhando US$ 400.000 por ano vendendo
          produtos no WhatsApp
        </h1>
        <h2 className={styles.postSubTitle}>
          Notícias de Tecnologia para quem não tem tempo de ler notícias.
        </h2>
      </div>
      {/*  POST IMAGE */}
      <div className={styles.postImage} />
      <div className={styles.postBodyContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
          quod ad fugiat? Illum accusamus provident nobis, et itaque dicta
          tempora quam eveniet reiciendis cumque quisquam est qui dolore autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eveniet cumque. Expedita quibusdam, cupiditate similique commodi
          consequatur, laboriosam harum sequi, nam aliquid distinctio maiores
          suscipit neque labore excepturi accusantium officia. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Accusamus eaque
          voluptatum ut soluta dolorem voluptatem, impedit cupiditate quas
          similique quae, quis odit obcaecati officiis minima sit
          necessitatibus, sint iusto aliquid? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Atque dignissimos deleniti commodi
          cupiditate iste quidem quaerat esse illum. In laborum sit non
          explicabo est ea magni ex assumenda nulla repudiandae. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Minima ab voluptates
          perferendis numquam eveniet quae, quas tenetur quia ducimus fuga iste?
          Maiores dolores accusamus enim quo, nam molestiae eveniet
          reiciendis!Loremlorem Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Rerum dolorum nesciunt reprehenderit ea ut
          architecto sit minus quos eos enim dolore quo, alias saepe quasi illum
          quis deleniti, minima tenetur.
        </p>
      </div>
    </div>
  );
};
export default PostView;
