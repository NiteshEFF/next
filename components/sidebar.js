import React,{useState} from "react";
import Modal from './modal';
import MovieCreateForm from './moviecreateform';
import {addMovie} from '../actions';
const Sidebar = (props) => {
  const {categorylist} = props;
  const [show, toggleModel] = useState(false);
  
  const createMovie = (item) => {
    addMovie(item).then((list)=>{
      toggleModel(!show);
    });
  };

return (<div className="col-lg-3">
  <Modal hassubmit={false} toggle={()=>toggleModel(!show)} show={show}>
  <MovieCreateForm addMovie={(items)=>createMovie(items)}/>
  </Modal>
<h1 className="my-4">Shop Name</h1>
<div className="list-group">
  {
    (Array.isArray(categorylist) && categorylist.length >0)? categorylist.map((item)=>
    <a href="#" className="list-group-item" key={item.id}>
      {item.name}
      </a>): null
  }
</div>
</div>);
};

export default Sidebar;