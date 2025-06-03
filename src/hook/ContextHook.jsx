import { useContext } from "react";
import UserContext from "../provider/AuthContext";

export const useUserContext = () => {
  const { user } = useContext(UserContext);
  return useUserContext;
};
