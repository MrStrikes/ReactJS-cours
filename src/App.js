import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { connect } from 'react-redux'

import Header from './Components/Header'

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import PrivatePage from './Components/Utils/PrivatePage'

import './App.css';

class App extends React.Component {

  render() {

    return (
        <Router>
            <div className="App">
                
                <Header/>

                <Switch>

                    <Route path="/contact">

                        <PrivatePage roles={[1]} >
                            <ContactPage />
                        </PrivatePage>
                        
                    </Route>

                    <Route path="/list">

                        <PrivatePage roles={[1, 2]} >
                            <ListPage />
                        </PrivatePage>

                    </Route>

                    <Route exact path="/login" >
                        { this.props.user_is_logged ? <Redirect to="/" /> : <LoginPage /> }
                    </Route>

                    <Route exact path="/" >

                        <PrivatePage roles={["*"]} >
                            <HomePage />
                        </PrivatePage>
                        
                    </Route>

                </Switch>

            </div>
        </Router>
    )

  }

}

let mapStateToProps = (state) => {
    return {
        user_is_logged: state.user_is_logged
    }
}

export default connect(mapStateToProps)(App);