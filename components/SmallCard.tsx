import Components from "../styles/Components.module.css";
import FirstSVG from "./icons/smallCards/firstStep";
import SecondSVG from "./icons/smallCards/secondStep";
import ThirdSVG from "./icons/smallCards/thirdStep";

interface SmallCardProps {
  step: 1 | 2 | 3;
  text: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ step, text }) => {
  return (
    <div className={Components.smallCard}>
      <div className={Components.stepImageContainer}>
        {step === 1 && <FirstSVG />}
        {step === 2 && <SecondSVG />}
        {step === 3 && <ThirdSVG />}
      </div>

      <div className={Components.stepBodyContainer}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: 40,

            marginBottom: 0,
          }}
        >
          {step}.
        </p>

        <p className={Components.smallCardText}>{text}</p>
      </div>
    </div>
  );
};

export default SmallCard;
