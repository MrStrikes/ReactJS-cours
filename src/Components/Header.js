import React from 'react'

import {
    NavLink
} from "react-router-dom";

import { connect } from 'react-redux'
class Header extends React.Component {

    render() {


        return (
            <header className="App-header">

                <NavLink to="/" activeClassName="active">Accueil</NavLink>

                <NavLink to="/list" activeClassName="active">Listing</NavLink>

                <NavLink to="/contact" activeClassName="active">Contact</NavLink>

                {/* <span 
                    className={`${this.props.currentPage === "home" && 'active'}`}
                
                    onClick={() => {
                        this.props.dispatch({ type: 'CHANGE_CURRENTPAGE', data: { currentPage: "home" } })
                    }}
                > Accueil </span>  */}

                {/* <span 
                    className={`${this.props.currentPage === "list" && 'active'}`}
                
                    onClick={() => {
                        this.props.dispatch({ type: 'CHANGE_CURRENTPAGE', data: { currentPage: "list" } })
                    }}
                > Listing </span>  */}

                {/* <span 
                    className={`${this.props.currentPage === "contact" && 'active'}`}
                
                    onClick={() => {
                        this.props.dispatch({ type: 'CHANGE_CURRENTPAGE', data: { currentPage: "contact" } })
                    }}
                > Contact </span> */}

            </header>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}

let dispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, dispatchToProps)(Header);