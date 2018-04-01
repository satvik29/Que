import React from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';
import Header from './Header'
import FirstPage from './FirstPage'
import PlayerRoute from './PlayerRoute';

class RouterWrapper extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path="/" component={FirstPage} exact/>
                        <Route path="/player" component={PlayerRoute} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default RouterWrapper;
