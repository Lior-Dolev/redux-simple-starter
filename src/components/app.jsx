import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RequestTypesTable from '../containers/RequestTypesTable.jsx';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route to="/" component={RequestTypesTable} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;