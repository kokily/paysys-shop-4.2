import React, { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { LOGIN, REGISTER } from '../../../libs/graphql/auth';

const reducer = (state: AuthState, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function useAuth() {
  const client = useApolloClient();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const { username, password, passwordConfirm } = state;

  const [Login] = useMutation(LOGIN);
  const [Register] = useMutation(REGISTER);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  }, []);

  const onLogin = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([username, password].includes('')) {
      toast.error('빈 칸 없이 입력해주세요');
      return;
    }

    try {
      const response = await Login({
        variables: { username, password },
      });

      if (response.data.Login.error) {
        toast.error(response.data.Login.error);
      } else {
        if (!response || !response.data) return;

        const token = response.data.Login.token;

        localStorage.setItem('paysys_token', token);

        await client.clearStore();

        document.location.href = '/soldier';
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const onRegister = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([username, password, passwordConfirm].includes('')) {
      toast.error('빈 칸 없이 입력해주세요');
      return;
    }

    try {
      const response = await Register({
        variables: { username, password },
      });

      if (response.data.Register.error) {
        toast.error(response.data.Register.error);
        return;
      } else {
        if (!response || !response.data) return;

        await client.clearStore();

        history.push('/');
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    username,
    password,
    passwordConfirm,
    onChange,
    onLogin,
    onRegister,
  };
}

export default useAuth;
