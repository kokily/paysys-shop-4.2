import React from 'react';
import AuthForm from './common/AuthForm';

interface Props {
  mode: 'login' | 'register';
  username: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const Login: React.FC<Props> = ({ mode, username, password, onChange, onSubmit }) => {
  return (
    <AuthForm
      mode={mode}
      username={username}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
