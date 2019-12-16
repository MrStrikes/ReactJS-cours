import React from 'react'

import Movies from '../Movies'

class ListPage extends React.Component {

    render() {
        return (
            <div>
                <h1>My listing</h1>
                {
                    Movies.map((movie) => {
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

export default ListPage