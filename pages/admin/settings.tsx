import React from "react";
import AdminContainer from "../../components/admin/AdminContainer";
import PostContainer from "../../components/PostContainer";
import AdminField from "../../components/admin/AdminField";
import styles from "../../styles/Admin.module.css";
import EditButton from "../../components/admin/EditButton";

const settings: React.FC = () => {
  return (
    <AdminContainer title="Configurações">
      <PostContainer title="Perfil">
        <div className={styles.form}>
          <AdminField label="Meu nome" />
          <AdminField label="Tags" />
          <AdminField label="Descrição da Newsletter" />
          <div className={styles.settingsButtonContainer}>
            <EditButton text="Salvar alterações" />
          </div>
        </div>
      </PostContainer>
    </AdminContainer>
  );
};

export default settings;
