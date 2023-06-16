import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function WrapperAuth({ children }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleToLogin = () => {
    if (!user) {
      return navigate("/login");
    }
  };

  return <div onClick={handleToLogin}>{children}</div>;
}

{/*
interface WrapperAuthProps {
  children: JSX.Element;
}

const WrapperAuth: FC<WrapperAuthProps> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleToLogin = () => {
    if (!user) {
      return navigate("/login");
    }
  };

  return <div onClick={handleToLogin}>{children}</div>;
};
*/}
export default WrapperAuth;
