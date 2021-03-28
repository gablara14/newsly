import React from "react";
import AdminContainer from "../../../components/admin/AdminContainer";
import AdminField from "../../../components/admin/AdminField";
import EditButton from "../../../components/admin/EditButton";
import styles from "../../../styles/Admin.module.css";

const create: React.FC = () => {
  return (
    <AdminContainer title="Confime a sua publicação">
      <div>
        <AdminField label="Título" />
        <AdminField label="Subtítulo" />
        <div className={styles.confirmPostBottomContainer}>
          <div>
            <div className={styles.fieldContainer}>
              <label>Essa publicação vai para:</label>
            </div>
            <div>
              <div className={styles.confirmPostLeadsCheckbox}>
                <input type="checkbox" /> <label htmlFor="">Opa</label>
              </div>
              <div className={styles.confirmPostLeadsCheckbox}>
                <input type="checkbox" /> <label htmlFor="">Opa</label>
              </div>
              <div className={styles.confirmPostLeadsCheckbox}>
                <input type="checkbox" /> <label htmlFor="">Opa</label>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.fieldContainer}>
              <label>Imagem:</label>
            </div>

            <div className={styles.confirmPostImage} />
          </div>
        </div>
        <div className={styles.confirmPostButtonContainer}>
          <EditButton text="Publicar" />
        </div>
      </div>
    </AdminContainer>
  );
};

export default create;
