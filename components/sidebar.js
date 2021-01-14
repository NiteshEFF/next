import React from "react";
import Modal from './modal';
import MovieCreateForm from './moviecreateform';
const Sidebar = (props) => {
  const {categorylist} = props;
return (<div className="col-lg-3">
  <Modal>
  <MovieCreateForm />
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