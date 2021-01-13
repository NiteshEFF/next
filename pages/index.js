import React, {Component} from 'react'
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
import Craousel from '../components/craousel';
import {getAllMovies} from '../actions';


class Home extends Component {
  static getInitialProps(){
   return getAllMovies().then(item =>{
      return {movie:item}
    })
  }
  render(){
    return <div>
              <div className="home-page">
                <div className="container">
                  <div className="row">
                    
                    <Sidebar />
                    <div className="col-lg-9">
                      <Craousel/>
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