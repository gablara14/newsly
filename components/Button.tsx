import Components from "../styles/Components.module.css";
import Link from "next/link";
interface ButtonProps {
  text: string;
  onClick?: (e?: any) => any;
  to?: string;
}
const Button: React.FC<ButtonProps> = ({ text, to, onClick }) => {
  const renderButton = () => {
    if (to) {
      return (
        <Link href={to}>
          <button className={Components.button}>{text}</button>
        </Link>
      );
    }
    return <button className={Components.button}>{text}</button>;
  };

  return renderButton();
};

export default Button;
