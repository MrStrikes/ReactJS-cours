import React from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">

                <span 
                    className={`${this.props.currentPage === "home" && 'active'}`}
                
                    onClick={() => {
                        this.props.changePage("home")
                    }}
                > Accueil </span> 

                <span 
                    className={`${this.props.currentPage === "list" && 'active'}`}
                
                    onClick={() => {
                        this.props.changePage("list")
                    }}
                > Listing </span> 

                <span 
                    className={`${this.props.currentPage === "contact" && 'active'}`}
                
                    onClick={() => {
                        this.props.changePage("contact")
                    }}
                > Contact </span>

            </header>
        )
    }

}

export default Header;