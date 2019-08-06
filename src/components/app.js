import React, {Component} from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Header from './Header/header';
import Home from './Home/home';
import ContinentDetail from './Detail/continent';
import Loader from './Loader/Loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <Router>
                <Header />
                <div className="content">
                    
                        <Switch>
                            <Route path="/continents" component={Home}/>
                            <Route path="/continent/:code" component={ContinentDetail}/>
                            <Route component={Home}/>
                        </Switch>
                </div>
                <Loader showLoader={true}></Loader>
            </Router>
        );
    }
}
 
export default App;