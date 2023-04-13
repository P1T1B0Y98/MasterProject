import { useMutation } from "@apollo/react-hooks";
import { AUTH_SIGN_IN } from "./mutation";
import _get from 'lodash/get';
import { useAuth } from "../../containers/Auth";
import { selectErrorMessage } from "../../utils/error";

export const useLogin = () => {
  const { setToken } = useAuth();
  const [login, { loading, error }] = useMutation(AUTH_SIGN_IN);
  console.log('Login:', login);
  const onLogin = async (form) => {
    console.log("form", form);
    try {
      const { data } = await login({ variables: form });
      setToken(data.result);
      console.info('Login success:', data.result);
      console.info(setToken(data.result))
    } catch (e) {
      console.log('E:', e, e.toString())
    }
  }

  return {
    onLogin,
    loading,
    error: selectErrorMessage(error),
  }
};

