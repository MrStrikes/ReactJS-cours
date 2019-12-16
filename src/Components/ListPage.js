import React from 'react'

import { connect } from 'react-redux'
class ListPage extends React.Component {

    render() {
        return (
            <div>
                <h1>My listing</h1>
                {
                    this.props.movies.map((movie) => {
                        return (
                            <div>

                                <h3>{movie.title}</h3>
                                <span> {movie.category} </span> <br/>
                                <img src={movie.image} alt="img" />

                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(ListPage)