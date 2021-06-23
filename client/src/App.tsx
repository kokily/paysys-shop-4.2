import { useQuery } from '@apollo/client';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loadable from '@loadable/component';
import { CHECK_ME } from './libs/graphql/auth';
import { isLogged } from './libs/store/graphql';
import GlobalStyle from './libs/styles';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/common/Loading';

// Auth Routes
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));
const PasswordPage = loadable(() => import('./pages/auth/PasswordPage'));

// Home Routes
const SoldierPage = loadable(() => import('./pages/home/SoldierPage'));
const ReservePage = loadable(() => import('./pages/home/ReservePage'));
const GeneralPage = loadable(() => import('./pages/home/GeneralPage'));
const ListMenuPage = loadable(() => import('./pages/home/ListMenuPage'));
const AddCartPage = loadable(() => import('./pages/home/AddCartPage'));

// Cart Route
const CartPage = loadable(() => import('./pages/cart/CartPage'));

// Front Routes
const ListFrontsPage = loadable(() => import('./pages/fronts/ListFrontsPage'));
const ReadFrontPage = loadable(() => import('./pages/fronts/ReadFrontPage'));
const AddReservePage = loadable(() => import('./pages/fronts/AddReservePage'));

// Item Routes
const ListItemsPage = loadable(() => import('./pages/items/ListItemsPage'));
const ReadItemPage = loadable(() => import('./pages/items/ReadItemPage'));
const AddItemPage = loadable(() => import('./pages/items/AddItemPage'));
const UpdateItemPage = loadable(() => import('./pages/items/UpdateItemPage'));

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
          <Route exact path="/menu" component={ListMenuPage} />
          <Route path="/menu/:menuId" component={AddCartPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/fronts" component={ListFrontsPage} />
          <Route exact path="/front/:frontId" component={ReadFrontPage} />

          {user && user.admin && (
            <>
              <Route exact path="/front/update/:frontId" component={AddReservePage} />
              <Route exact path="/items" component={ListItemsPage} />
              <Route exact path="/item/:itemId" component={ReadItemPage} />
              <Route exact path="/add" component={AddItemPage} />
              <Route exact path="/item/update/:itemId" component={UpdateItemPage} />
            </>
          )}
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

  if (loading) return <Loading />;

  return (
    <>
      <GlobalStyle />
      {isLogged() ? <LoginRoutes user={data?.CheckMe.me || null} /> : <LogoutRoutes />}
      <ToastContainer position="top-center" draggable={false} />
    </>
  );
}

export default App;
