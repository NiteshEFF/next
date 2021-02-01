import React, {Component} from 'react'
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
import Craousel from '../components/craousel';
import {getAllMovies, getAllCategories} from '../actions';


class Home extends Component {
  state = {"activecategory":""}
  static getInitialProps(){
    let movies;
   return getAllMovies().then(item =>{
      movies=item;
     return getAllCategories();
    }).then((items)=> {
      return {movie:movies, category:items}
    });
    
  }
  filterCategory = (category) => {
    let currentState = {...this.state};
    currentState.activecategory = category.name;
    this.setState(currentState);
  }
  filterMovies = (movies) => {
    return movies.filter((movie)=>{return movie.genre && movie.genre.includes(this.state.activecategory)});
  }
  render(){
    return <div>
              <div className="home-page">
                <div className="container">
                  <div className="row">
                    
                    <Sidebar categorylist={this.props.category} filter={(category)=>this.filterCategory(category)} active={this.state.activecategory}/>
                    <div className="col-lg-9">
                      <Craousel movieslist={this.props.movie}/>
                      <h1>Displaying {this.state.activecategory} movies</h1>
                      <div className="row">
                        <Movies list={this.filterMovies(this.props.movie)}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  }
}

export default Home