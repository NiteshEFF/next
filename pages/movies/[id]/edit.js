import React, {Component} from 'react';
import Router from 'next/router';
import MovieCreateForm from '../../../components/moviecreateform';
import {getMovieById, updateMovie} from '../../../actions';

class MovieEditForm extends Component{
    

    static getInitialProps(context){
    const {query} =context;
    let id = query.id;
    return getMovieById(id).then((movie)=>{
        return {"movie":movie};
    });
    }
    updateMovie = (item) => {
     updateMovie(item).then((movie)=>{
        Router.push('/movies/[id]',`/movies/${item.id}`);
     });  
    }
    render(){
        const {movie} = this.props;
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm 
                initialData={movie}
                submitbtn="Update"
                addMovie={(items)=>this.updateMovie(items)}/>
            </div>
        )
    }
}
export default MovieEditForm;