import { useContext } from "react";
import UserContext from "../provider/AuthContext";

const useUserContext = () => {
  const { user } = useContext(UserContext);
  return user;
};

export default useUserContext;
