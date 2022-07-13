import { Register, ForgotPwd } from "../../components/Auth";
import "./style.scss";
const ForgotPassword = () => {
  return (
    <div className="block-full block-full-login tory-wrap">
      <div className="block-login user-block center-content">
        <div className="inner-message message-login">
          <Register />
          <ForgotPwd />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
