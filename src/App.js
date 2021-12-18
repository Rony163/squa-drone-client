import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ExploreServices from './pages/ExploreServices/ExploreServices';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PriivateRoute/PrivateRoute';
import Registration from './pages/Login/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore-services">
              <ExploreServices></ExploreServices>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;