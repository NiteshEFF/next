import React from 'react'
import Header from '../components/head';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
import Craousel from '../components/craousel';
import Footer from '../components/footer';

const Home = () => (
    <div>
      <Header/>
        <Nav/>
          <div className="home-page">
            <div className="container">
              <div className="row">
                <Sidebar/>
                <div className="col-lg-9">
                  <Craousel/>
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
      <Footer/>
    </div>
)

export default Home