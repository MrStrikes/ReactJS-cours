import React from 'react';

import Header from './Components/Header'

import HomePage from './Components/HomePage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import { connect } from 'react-redux'

import './App.css';

class App extends React.Component {

  render() {

    return (
        <div className="App">
            
            <Header/>

            {this.props.currentPage === "home" && <HomePage/>}
            {this.props.currentPage === "list" && <ListPage/>}
            {this.props.currentPage === "contact" && <ContactPage/>}

        </div>
    );
  }

}

let mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps)(App);