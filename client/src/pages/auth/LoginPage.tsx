import AuthTemplate from '../../components/auth/common/AuthTemplate';
import Login from '../../components/auth/Login';
import useAuth from './hooks/useAuth';

function LoginPage() {
  const { username, password, onChange, onLogin } = useAuth();

  return (
    <AuthTemplate mode="login">
      <Login
        mode="login"
        username={username}
        password={password}
        onChange={onChange}
        onSubmit={onLogin}
      />
    </AuthTemplate>
  );
}

export default LoginPage;
