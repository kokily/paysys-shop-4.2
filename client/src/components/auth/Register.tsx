import React from 'react';
import AuthForm from './common/AuthForm';

interface Props {
  mode: 'login' | 'register';
  username: string;
  password: string;
  passwordConfirm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const Register: React.FC<Props> = ({
  mode,
  username,
  password,
  passwordConfirm,
  onChange,
  onSubmit,
}) => {
  return (
    <AuthForm
      mode={mode}
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
