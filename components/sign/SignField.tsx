import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createError, clearError } from "../../redux/actions";
import { StoreState } from "../../redux/reducers";
import styles from "../../styles/SignIn.module.css";

interface SignFieldProps {
  label: string;
  placeHolder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  mustBeEqual?: string;
}

const SignField: React.FC<SignFieldProps> = ({
  label,
  placeHolder,
  type,
  value,
  onChange,
  required,
  children,
  minLength,
  maxLength,
  mustBeEqual,
}) => {
  const [touched, setTouched] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const handleBlur = () => {
    setTouched(true);
  };

  useEffect(() => {
    if (touched) {
      if (required && (!value || value.length === 0)) {
        setError(`Campo obrigatório`);
        dispatch(createError({ id: label, errorMessage: error }));
        return;
      }
      if (minLength && value.length < +minLength) {
        setError(`O campo deve ter no mínimo ${minLength} caracteres.`);
        dispatch(createError({ id: label, errorMessage: error }));
        return;
      }
      if (maxLength && value.length > +maxLength) {
        setError(`O campo deve ter no máximo ${maxLength} caracteres.`);
        dispatch(createError({ id: label, errorMessage: error }));
        return;
      }
      if (mustBeEqual && mustBeEqual !== value) {
        setError(`Os campos devem ser iguais`);
        dispatch(createError({ id: label, errorMessage: error }));
        return;
      } else {
        setError("");
        dispatch(clearError(label));
      }
    }
  }, [error, dispatch, value, touched]);

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={styles.fieldContainer}>
      <label>{label}:</label>
      <input
        required={required}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type ? type : "text"}
        placeholder={placeHolder}
      />
      <p className="errorMessage">{children ? children : error}</p>
    </div>
  );
};

// const DefaultProps = {
//   value: '',
// }

export default SignField;
