import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // zainstalowana biblioteka do wybierania sciezek
import RegisterCustomer from './RegisterCustomer';
import MainPage from './MainPage';
import './App.css';
import CarOrder from './CarOrder';


const App = () => {

    return (
    <Router>
        <Switch>
            <Route path="/register" exact component={RegisterCustomer} />
            <Route path="/" exact component={MainPage} />
            <Route path="/order" exact component={CarOrder} />
        </Switch>
    </Router>
    );
    
};

export default App;
