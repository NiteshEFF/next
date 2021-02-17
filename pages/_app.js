import App from 'next/app';
import Header from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

class MovieApp extends App {

  static getInitialProps(appContext){
    return App.getInitialProps(appContext).then((appProps)=>{
        return {...appProps};
    });
  }

  render(){
    const {Component, pageProps} = this.props;
    return <div>
          <Header/>
          <Nav/>
          <div className="base-page">
        <Component {...pageProps}/>
        <Footer/>
        </div>
        <style jsx>{`
              .base-page{
                padding-top: 80px;
              }
              `}</style>
        </div>
    
  }
}
export default MovieApp;
