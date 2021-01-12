import React, {useState} from 'react'
import Header from '../components/head';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import Movies from '../components/movies';
import Craousel from '../components/craousel';
import Footer from '../components/footer';
import MovieList from '../resources/1_data';

const Home = () => {
  const [count,setCount] = useState(0)

    return <div>
      <Header/>
        <Nav/>
          <div className="home-page">
            <div className="container">
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment Button</button>
                <button className="btn btn-primary" onClick={()=>setCount(count-1)}>Decrement Button</button>
              <div className="row">
                
                <Sidebar count={count}/>
                <div className="col-lg-9">
                  <Craousel/>
                  <div className="row">
                    <Movies count={count} list={MovieList}/>
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
}

export default Home