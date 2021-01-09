import React,{useState} from "react";

const Sidebar = () => {
  const [count, setCount] = useState(0);

return (<div className="col-lg-3">

<h1 className="my-4">Shop Name</h1>
<div className="list-group">
  <a href="#" className="list-group-item">Category 1</a>
  <a href="#" className="list-group-item">Category 2</a>
  <a href="#" className="list-group-item">Category 3</a>
</div>
<div>
                <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment Button</button>
                <button className="btn btn-primary" onClick={()=>setCount(count-1)}>Decrement Button</button>
                <h1>{count}</h1>
            </div>
</div>);
};

export default Sidebar;