import styles from "../../styles/SignIn.module.css";
import Loader from "../loader/circle";
import Link from "next/link";
interface ButtonProps {
  text: string;
  onClick?: (e?: any) => any;
  to?: string;
  loading?: boolean;
}
const SignButton: React.FC<ButtonProps> = ({ text, to, onClick, loading }) => {
  const renderButton = () => {
    if (to) {
      return (
        <Link href={to}>
          <button className={styles.button}>
            {loading ? <Loader /> : text}
          </button>
        </Link>
      );
    }
    return (
      <button onClick={onClick} type="submit" className={styles.button}>
        {loading ? <Loader /> : text}
      </button>
    );
  };

  return renderButton();
};

export default SignButton;
