import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _get from 'lodash/get';
import { AUTH_ME } from "./query";
import { useMutation, useLazyQuery } from '@apollo/client';
import { MUTATION_PUSH_NOTIFICATION } from './mutation';

const keyUser = '@User';
const keyToken = '@accessToken';

const AuthContext = createContext({
  loading: false,
  accessToken: null,
  currentUser: null,
  refetch: () => false,
  onLogout: () => false,
  authenticate: () => false,
  setToken: (token) => false,
  createToken: (token) => {},
});

export const useAuth = () => useContext(AuthContext);

export const getUser = async () => await AsyncStorage.getItem(keyUser);

export const getToken = async () => await AsyncStorage.getItem(keyToken);

export const Auth = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [profile, {loading, data, refetch}] = useLazyQuery(AUTH_ME, {
    onCompleted: (data) => {
      console.log("data:", data.result);
    },
    onError: (error) => {
      console.log("error:", error);
    }
  });
  const [_createToken] = useMutation(MUTATION_PUSH_NOTIFICATION);
  const createToken = useCallback((token) => _createToken({ variables: { token } }), [])
  useEffect(() => {
    if (profile && typeof profile === 'function') {
      profile();
    }
  }, [accessToken])

  const setToken = async (token) => {
    try {
      if (token) {
        await AsyncStorage.setItem(keyToken, token);
        console.log("keytoken:", keyToken)
      } else {
        await AsyncStorage.removeItem(keyToken);
      }
      setAccessToken(token);
      await profile();
    } catch (error) {
      setAccessToken(null);
      throw error;
    }
  };

  const authenticate = useCallback(async () => {
    let token;
    try {
      token = await getToken();

      if (token) {
        await profile();
      }
    } catch (error) {
      token = null;
    } finally {
      setAccessToken(token);
      return token;
    }
  }, []);

  const onLogout = useCallback(() => {
    setToken(null);
  });

  return (
    <>
    <AuthContext.Provider
      value={{
        loading,
        onLogout,
        setToken,
        accessToken,
        authenticate,
        createToken,
        refetch: profile,
        currentUser: _get(data, 'result'),
        isAuthenticated: !!accessToken,
      }}>
      {props.children}
    </AuthContext.Provider>
    </>
  );
};
