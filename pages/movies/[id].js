import {useRouter} from 'next/router';
import {getMovieById} from '../../actions';

const Movie = (props) =>{
    const router = useRouter();
    const {id} = router.query;

    return (
        <div className="container">
            <h3>Movie with id: {id}</h3>
            <div className="jumbotron">
        <h1 className="display-4">{props.selectedmovie.name}</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p>
        Some description about the movie
      </p>
        </div>
    )
};

Movie.getInitialProps =() => {
    return getMovieById("2").then(movie => {
        return {selectedmovie:movie}
    })
}

export default Movie;