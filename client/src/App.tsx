import { useQuery } from '@apollo/client';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loadable from '@loadable/component';
import { CHECK_ME } from './libs/graphql/auth';
import { isLogged } from './libs/store/graphql';

const LoginPage = loadable(() => import('./pages/auth/LoginPage'));

const LoginRoutes = ({ user }: { user: MeType | null }) => {
  if (!user) {
    localStorage.removeItem('paysys_token');
    document.location.href = '/';
  }

  return (
    <>
      {user && (
        <Switch>
          LoginRoutes
          {user && user.admin && <>AdminRoutes</>}
        </Switch>
      )}
    </>
  );
};

const LogoutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

function App() {
  const { data, loading } = useQuery<{ CheckMe: { me: MeType } }>(CHECK_ME);

  if (loading) return <h3>Loading</h3>;

  return (
    <>
      {isLogged() ? <LoginRoutes user={data?.CheckMe.me || null} /> : <LogoutRoutes />}
      <ToastContainer position="top-center" draggable={false} />
    </>
  );
}

export default App;
