import React from "react";
import AdminContainer from "../../../../components/admin/AdminContainer";
import styles from "../../../../styles/Admin.module.css";
import AdminField from "../../../../components/admin/AdminField";
import EditButton from "../../../../components/admin/EditButton";
import PostContainer from "../../../../components/PostContainer";
const leads: React.FC = () => {
  return (
    <AdminContainer backLink="/admin/leads" title="Adicionar lead">
      <PostContainer title="Preencha as informações do seu lead">
        <div className={styles.form}>
          <AdminField label="Email" />
          <AdminField label="Newsletter que pertence" />
          <AdminField label="Observação" />
          <div className={styles.settingsButtonContainer}>
            <EditButton text="Adicionar lead" />
          </div>
        </div>
      </PostContainer>
    </AdminContainer>
  );
};

export default leads;
