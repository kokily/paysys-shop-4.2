import Password from '../../components/auth/Password';
import PageTemplate from '../../components/common/PageTemplate';
import usePassword from './hooks/usePassword';

function PasswordPage() {
  const { password, onChange, onSubmit, onKeyPress } = usePassword();

  return (
    <PageTemplate>
      <Password
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
}

export default PasswordPage;
