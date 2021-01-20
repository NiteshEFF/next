import {useState} from 'react';

const MovieCreateForm = (props) => {
    const [form, setForm] = useState({name :'Something new', description: 'Something new',"rating":'','image':'', 'cover':'','longDesc':'','genre':''});

    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      setForm({...form,
        [name]:target.value
      });
    };

    const genreChange = (event) => {
      const target = event.target;
      const {options} = target;
      const name = target.name;
      const optionSLength = options.length;
      let value =[];
      for (let i=0; i<optionSLength; i++){
        if(options[i].selected){
          value.push(options[i].value);
        }
      }
      setForm({...form,
        [name]:value.toString()
      });
    };
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
           onChange={handleChange}
           value={form.name}
           type="text"
           name="name" 
           className="form-control" 
           id="name" 
           aria-describedby="emailHelp" 
           placeholder="Lord of the Rings" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
          onChange={handleChange}
          name="description" 
          value={form.description}
          type="text"
          className="form-control"
          id="description" 
          placeholder="Somewhere in Middle-earth..." />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input
          onChange={handleChange}
          name="rating" 
          value={form.rating}
          type="number" 
          max="5"
          min="0"
          className="form-control" 
          id="rating" 
          placeholder="3" />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
          onChange={handleChange}
          name="image"
          type="text"
          value={form.image} 
          className="form-control" 
          id="image" 
          placeholder="http://....." />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input
          onChange={handleChange} 
          name="cover"
          type="text" 
          className="form-control" 
          id="cover" 
          value={form.cover}
          placeholder="http://......" />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea
          onChange={handleChange}
          name="longDesc"
          className="form-control" 
          id="longDesc"
          value={form.longDesc} 
          rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select multiple
           onChange={genreChange}
           name="genre"
           className="form-control" id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{props.addMovie(form)}}>Create Movie</button>
      </form>
    )
  }
  
  export default MovieCreateForm