import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  //ei hook ta use korle, usecontext o import kora lagbe na & authcontext o import kora lagbe na.
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
