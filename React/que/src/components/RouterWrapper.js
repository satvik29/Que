import React from 'react';
import FirstPage from './FirstPage'
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';
import Header from '../components/Header'
import DummyRoute from './DummyRoute';

class RouterWrapper extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path="/" component={DummyRoute} exact /> 
                        <Route path="/group" component={FirstPage} />  
                    </div>              
                </BrowserRouter>
            </div>
        );
    }
}

export default RouterWrapper;
