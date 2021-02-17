import React, {Component} from "react";
import Link from "next/link"

class Movies extends Component{
    stars =(count) =>{
      let starts =[];
      for(let i=0; i<count; i++){
        starts.push("&#9733;");
      }
      return starts.join(" ");
    }
    render(){
        return (Array.isArray(this.props.list) && this.props.list.length > 0)?
              this.props.list.map((item) => {
                return (<div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="card h-100">
                  <Link href="/movies/[id]" as={`/movies/${item.id}`}>
                    <a><img className="card-img-top" src={item.image} alt="" /></a>
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title">
                          <Link href="/movies/[id]" as={`/movies/${item.id}`}>
                            <a>{item.name}</a>
                            </Link>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{item.rating}</small>
                    </div>
                </div>
            </div>)
              }) : null
            
    }
}
export default Movies;