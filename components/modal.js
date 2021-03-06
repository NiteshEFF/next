import React,{useState, Component} from "react";

class Modal extends Component{
  constructor(props){
    super(props);
    this.state={show:false};
  }
  toggle = () => {
    let currentState = {...this.state};
    currentState.show = !currentState.show;
    this.setState(currentState);
  }
  render(){
    return(<div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.props.toggle}>
        Create Movie
      </button>
      
      <div className={(this.props.show)? "modal fade show" : "modal fade"} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style={(this.props.show)?{display:"block", paddingRight:"17px"}:null}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.toggle}>x</button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.toggle}>Close</button>
              {(this.props.hassubmit) && <button type="button" className="btn btn-primary">Save changes</button>}
            </div>
          </div>
        </div>
      </div>
      </div>);
  }
}

// const Modal = (props) => {
//   const [show,toggle]=useState(false);
//    return <div>
// <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>toggle(!show)}>
//   Create Movie
// </button>

// <div className={(show)? "modal fade show" : "modal fade"} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style={(show)?{display:"block", paddingRight:"17px"}:null}>
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>toggle(!show)}>x</button>
//       </div>
//       <div className="modal-body">
//         {props.children}
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>toggle(!show)}>Close</button>
//         {(props.hassubmit) && <button type="button" className="btn btn-primary">Save changes</button>}
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// };

export default Modal;