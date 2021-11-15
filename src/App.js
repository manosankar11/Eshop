import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './components/HomePage/HomePage';
//import Cart from './components/Cart/Cart';
//import Login from './components/Login'



const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Switch> */}
        {/* <Route to="/" exact > */}
        <HomePage />
        {/* </Route> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
