import React from "react";

const Craousel = (props) => {
  const {movieslist} = props;
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
          {Array.isArray(movieslist) && movieslist.length >0 ? movieslist.map((item, i) =>
           <li datatarget="#carouselExampleIndicators" dataslide-to={i} key={i} className={i==0? 'active':''}></li>
            ):null}
            
          </ol>
          <div className="carousel-inner" role="listbox">
          {Array.isArray(movieslist) && movieslist.length >0 ? movieslist.map((item, i) =>
           <div className={i==0? "carousel-item active" : "carousel-item"} key={`image-${item.id}`}>
              <img className="d-block img-fluid" src={item.cover} alt="First slide" />
            </div>
            ):null}
            </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    )
}

export default Craousel;