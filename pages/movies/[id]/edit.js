import React, {Component} from 'react';
import MovieCreateForm from '../../../components/moviecreateform';
import {getMovieById} from '../../../actions';

class MovieEditForm extends Component{
    

    static getInitialProps(context){
    const {query} =context;
    let id = query.id;
    return getMovieById(id).then((movie)=>{
        return {"movie":movie};
    });
    }
    render(){
        const {movie} = this.props;
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm initialData={movie}/>
            </div>
        )
    }
}
export default MovieEditForm;