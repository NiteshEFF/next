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

const addMovie = (movie) =>{
    return new Promise((resolve, reject)=>{
        let random = Math.random();
        console.log();
        resources.push({...movie,id:random.toString().slice(2,7)});
        return resolve(resources);
    });
};

export {getAllMovies, getMovieById, getAllCategories, addMovie};