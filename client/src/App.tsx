import { useQuery } from '@apollo/client';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loadable from '@loadable/component';
import { CHECK_ME } from './libs/graphql/auth';
import { isLogged } from './libs/store/graphql';
import GlobalStyle from './libs/styles';

// Auth Routes
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));
const PasswordPage = loadable(() => import('./pages/auth/PasswordPage'));

// Home Routes
const SoldierPage = loadable(() => import('./pages/home/SoldierPage'));
const ReservePage = loadable(() => import('./pages/home/ReservePage'));
const GeneralPage = loadable(() => import('./pages/home/GeneralPage'));

const LoginRoutes = ({ user }: { user: MeType | null }) => {
  if (!user) {
    localStorage.removeItem('paysys_token');
    document.location.href = '/';
  }

  return (
    <>
      {user && (
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/soldier" />} />
          <Route exact path="/soldier" component={SoldierPage} />
          <Route exact path="/reserve" component={ReservePage} />
          <Route exact path="/general" component={GeneralPage} />
          <Route exact path="/password" component={PasswordPage} />
          {user && user.admin && <>AdminRoutes</>}
          <Redirect from="*" to="/soldier" />
        </Switch>
      )}
    </>
  );
};

const LogoutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

function App() {
  const { data, loading } = useQuery<{ CheckMe: { me: MeType } }>(CHECK_ME);

  if (loading) return <h3>Loading</h3>;

  return (
    <>
      <GlobalStyle />
      {isLogged() ? <LoginRoutes user={data?.CheckMe.me || null} /> : <LogoutRoutes />}
      <ToastContainer position="top-center" draggable={false} />
    </>
  );
}

export default App;
