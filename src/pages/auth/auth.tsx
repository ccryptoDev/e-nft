import { Register, Login } from "../../components/Auth";
import "./style.scss";
const Auth = () => {
  return (
    <div className="block-full block-full-login tory-wrap">
      <div className="block-login user-block center-content">
        <div className="inner-message message-login">
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Auth;
