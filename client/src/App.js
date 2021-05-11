
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeComponent from './Component/Local/HomeComponent'
import Navbar from './Component/Local/Navbar';
import LoginComponent from './Component/Local/LoginComponent'
import SignupComponent from './Component/Local/SignupComponent'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProfileComponent from './Component/Private/ProfileComponent';
import PrivateRoute from './Config/PrivateRoute.js'
import LogoutComponent from './Component/Private/LogoutComponent';
function App() {
  return (

    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path='/signup' component={SignupComponent} />
          <PrivateRoute exact path='/profile' component={ProfileComponent} />
          <PrivateRoute exact path='/logout' component={LogoutComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
