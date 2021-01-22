import React,{useState} from "react";
import Modal from './modal';
import {useRouter} from 'next/router';
import MovieCreateForm from './moviecreateform';
import {addMovie} from '../actions';
const Sidebar = (props) => {
  const {categorylist} = props;
  const router = useRouter();
  const [show, toggleModel] = useState(false);
  
  const createMovie = (item) => {
    addMovie(item).then((list)=>{
      toggleModel(!show);
      router.push('/');
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
    <a href="#" className={`list-group-item ${(props.active === item.name)? ' active' : ''}`} key={item.id} onClick={()=> props.filter(item)}>
      {item.name}
      </a>): null
  }
</div>
</div>);
};

export default Sidebar;