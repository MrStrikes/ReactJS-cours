import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './Components/Header'

import HomePage from './Components/HomePage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import PrivatePage from './Components/Utils/PrivatePage'

import './App.css';

class App extends React.Component {

  render() {

    return (
        <Router>
            <div className="App">
                
    
                <Switch>

                    <Route path="/contact">

                        <PrivatePage roles={[1]} >
                            <div>
                                <Header/>
                                <ContactPage />
                            </div>
                        </PrivatePage>
                        
                    </Route>

                    <Route path="/list">

                        <PrivatePage roles={[1, 2]} >
                            <div>
                                <Header/>
                                <ListPage />
                            </div>

                        </PrivatePage>

                    </Route>

                    <Route exact path="/login" >
                        <div>
                            <HomePage />
                        </div>
                    </Route>

                    <Route exact path="/" >
                        <div>
                            <Header/>
                            <HomePage />
                        </div>
                    </Route>

                </Switch>

            </div>
        </Router>
    )

  }

}

export default App;

// let mapStateToProps = (state) => {
//     return {
        
//     }
// }

// export default connect(mapStateToProps)(App);