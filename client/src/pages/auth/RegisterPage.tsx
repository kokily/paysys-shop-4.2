import AuthTemplate from '../../components/auth/common/AuthTemplate';
import Register from '../../components/auth/Register';
import useAuth from './hooks/useAuth';

function RegisterPage() {
  const { username, password, passwordConfirm, onChange, onRegister } = useAuth();

  return (
    <AuthTemplate mode="register">
      <Register
        mode="register"
        username={username}
        password={password}
        passwordConfirm={passwordConfirm}
        onChange={onChange}
        onSubmit={onRegister}
      />
    </AuthTemplate>
  );
}

export default RegisterPage;
