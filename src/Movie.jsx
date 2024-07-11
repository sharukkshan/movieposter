import React from 'react';
import './movie.css';

function Movie(props) {
    console.log(props);
    return (
        <>
            {props.card.map((movie, i) => {
                return (
                    <div className="movie-card" key={i}>
                        <div className="left">
                        <div className="movie-poster">
                            <img src={movie.poster} alt="Poster" />
                            <div className="movie-de">
                            <h2 className="movie-title">{movie.title}</h2>
                            <p className="movie-year-director">{movie.year}, {movie.director}</p>
                            <p className="movie-duration">{movie.duration}</p>
                            <p className="movie-genres">{movie.genres}</p>

                            </div>
                        </div>
                        <div className="movie-info">
                            
                            <p className="movie-description">{movie.description}</p>
                            <div className="movie-actions">
                                <button className="action-button"><i className="fa fa-heart"></i></button>
                                <button className="action-button"><i className="fa fa-comment"></i></button>
                                <button className="action-button"><i className="fa fa-share"></i></button>
                            </div>
                        </div>
                        </div>
                        <div className="movie-background right">
                            <img src={movie.background} alt="Poster Background" />
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Movie;