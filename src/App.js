import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header'

import HomePage from './Components/HomePage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentPage: "home"
        }

    }

  render() {
    return (
        <div className="App">
            
            <Header 
                currentPage={this.state.currentPage} 
                changePage={(page) => {
                    this.setState({currentPage: page})
                }} >

            </Header>

            {this.state.currentPage === "home" && <HomePage/>}
            {this.state.currentPage === "list" && <ListPage/>}
            {this.state.currentPage === "contact" && <ContactPage 
                changePage={(page) => {
                    this.setState({currentPage: page})
                }} 
            />}

        </div>
    );
  }

}

export default App;