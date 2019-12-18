import React from 'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

class PrivatePage extends React.Component {

    render() {

        if (!this.props.user_is_logged) {
            // alert("Tu n'es pas connecté")
            return (
                <Redirect to="/"></Redirect>
            )
        } else if (!this.props.roles.includes(this.props.user_role)) {
            // alert("Tu n'a pas le bon role")
            return (
                <Redirect to="/"></Redirect>
            )
        }

        return this.props.children

    }

}

let mapStateToProps = (state) => {
    return {
        user_is_logged: state.user_is_logged,
        user_role: state.user_role
    }
}

let dispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, dispatchToProps)(PrivatePage)