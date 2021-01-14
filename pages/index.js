import React, {Component} from 'react'
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
import Craousel from '../components/craousel';
import {getAllMovies, getAllCategories} from '../actions';


class Home extends Component {
  static getInitialProps(){
    let movies;
   return getAllMovies().then(item =>{
      movies=item;
     return getAllCategories();
    }).then((items)=> {
      return {movie:movies, category:items}
    });
    
  }
  render(){
    return <div>
              <div className="home-page">
                <div className="container">
                  <div className="row">
                    
                    <Sidebar categorylist={this.props.category}/>
                    <div className="col-lg-9">
                      <Craousel movieslist={this.props.movie}/>
                      <div className="row">
                        <Movies list={this.props.movie}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  }
}

export default Home