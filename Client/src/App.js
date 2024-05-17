
import './App.css';
import Login from './Components/Login/Login';
// import NavigationBar from './Components/Navbar/NavigationBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
import Protected from './Components/Protected';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    // <div className="App">
    //   {/* <NavigationBar /> */}
    //   <Login/>
    // </div>
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          {/* Add other routes here */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
