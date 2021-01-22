import resources from '../resources/1_data';
import category from '../resources/category';
import axios from 'axios';
const BASE_URL = 'http://localhost:3100';
let getAllMovies = () =>{
    return axios.get(`${BASE_URL}/api/v1/movies`).then((response)=>{
        return response.data;
    })
};

let getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((response)=>{
        return response.data;
    });
}
const getAllCategories = () =>{
    return new Promise((resolve,reject)=>{
        resolve(category);
    });
};

const addMovie = (movie) =>{
    return axios.post(`${BASE_URL}/api/v1/movies`,{...movie,id:Math.random().toString().slice(2,7)}).then((response)=> response.data);
};

const rmMovie = (id,router)=>{
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then((response)=>{
        router.push('/');
        return response.data;
    });
}

const updateMovie = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`,movie).then((response)=>{
        return response.data;
    });
};

export {getAllMovies, getMovieById, getAllCategories, addMovie,rmMovie, updateMovie};