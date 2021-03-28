import styles from "../../styles/SignIn.module.css";
import Link from "next/link";
interface ButtonProps {
  text: string;
  onClick?: (e?: any) => any;
  to?: string;
}
const SignButton: React.FC<ButtonProps> = ({ text, to, onClick }) => {
  const renderButton = () => {
    if (to) {
      return (
        <Link href={to}>
          <button className={styles.button}>{text}</button>
        </Link>
      );
    }
    return <button className={styles.button}>{text}</button>;
  };

  return renderButton();
};

export default SignButton;
