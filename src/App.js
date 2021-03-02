import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import BloodTest from './pages/BloodTest';
import Laboratorium from './pages/Laboratorium';
import Artikel from './pages/Artikel';
import Login from './pages/Login';
import Register from './pages/Register';

import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/" component={BloodTest} />
            <Route path="/laboratorium" component={Laboratorium} />
            <Route path="/artikel" component={Artikel} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
