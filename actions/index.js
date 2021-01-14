import resources from '../resources/1_data';
import category from '../resources/category';
let getAllMovies = () =>{
    return new Promise((resolve, reject)=>{
          resolve(resources);
    });
};

let getMovieById = (id) => {
    return new Promise((resolve,reject)=>{
        const movieIndex = resources.findIndex(m => m.id === id);
        if(movieIndex!=-1){
            const movie = resources[movieIndex];
            resolve(movie);
        } else {
            reject("Movie Not found")
        }
        

    });
}
const getAllCategories = () =>{
    return new Promise((resolve,reject)=>{
        resolve(category);
    });
};

export {getAllMovies, getMovieById, getAllCategories};