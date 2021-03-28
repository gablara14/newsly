import React from "react";
import AdminContainer from "../../../components/admin/AdminContainer";
import styles from "../../../styles/Admin.module.css";
const leads: React.FC = () => {
  return (
    <AdminContainer title="Lista de emails">
      <div className={styles.buttonContainer}>
        <button className={styles.removeLeadButton}>
          Remover leads Selecionados
        </button>
        <button className={styles.addLeadButton}>Adicionar lead</button>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <tr>
            <th className={styles.tableCheckBox}>
              <input type="checkbox" />
            </th>
            <th>Prospecto</th>
            <th>Plano</th>
            <th>Data de início</th>
            <th>Faturamento</th>
          </tr>
          <tr>
            <td className={styles.tableCheckBox}>
              <input type="checkbox" />
            </td>
            <td>gabrielr.lara@hotmail.com</td>
            <td>Gratuito</td>
            <td>24/03/2021</td>
            <td>R$ 70,33</td>
          </tr>
        </table>
      </div>
    </AdminContainer>
  );
};

export default leads;
