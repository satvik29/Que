import React from 'react';
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
                    <Route path="/" component={DummyRoute} />               
                </BrowserRouter>
            </div>
        );
    }
}

export default RouterWrapper;
