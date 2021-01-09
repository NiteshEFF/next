import React from 'react'
import Header from '../components/head';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
const Home = () => (
  <div>
    <Header/>
    <Nav/>
  <div className="home-page">
  <div className="container">
    <div className="row">

      <Sidebar/>

      <div className="col-lg-9">
        <div id="carouselExampleIndicators" className="carousel slide my-4" dataride="carousel">
          <ol className="carousel-indicators">
            <li datatarget="#carouselExampleIndicators" dataslide-to="0" className="active"></li>
            <li datatarget="#carouselExampleIndicators" dataslide-to="1"></li>
            <li datatarget="#carouselExampleIndicators" dataslide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" dataslide="prev">
            <span className="carousel-control-prev-icon" ariahidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" dataslide="next">
            <span className="carousel-control-next-icon" ariahidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="row">
          <Movies/>
          </div>
      </div>
    </div>
  </div>
  </div>
  <style jsx>{`
  .home-page{
    padding-top: 80px;
  }
  `}</style>
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
  </footer>

  </div>
)

export default Home