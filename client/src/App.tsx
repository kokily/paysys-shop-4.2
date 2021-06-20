import { Switch, Route, Redirect } from 'react-router-dom';

const LoginRoutes = () => <Switch>LoginRoutes</Switch>;

const LogoutRoutes = () => <Switch>LogoutRoutes</Switch>;

function App() {
  return <>{1 === 1 ? <LoginRoutes /> : <LogoutRoutes />}</>;
}

export default App;
