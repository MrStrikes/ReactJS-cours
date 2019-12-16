import React from 'react'

import { connect } from 'react-redux'
class ContactPage extends React.Component {

    render() {
        return (
            <div>

                <input type="text"/> <br/>
                <input type="text"/> <br/>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <input type="submit" />

                <button onClick={() => {
                    this.props.dispatch({ type: "ADD_MOVIE", data: { id: 99, title: "Test", category: "Test category", image: 'http://lorempixel.com/640/360' } })
                }}>
                    ADD MOVIE
                </button>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {}
}

let dispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}


export default connect(mapStateToProps, dispatchToProps)(ContactPage)