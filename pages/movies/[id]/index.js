import {useRouter} from 'next/router';
import {getMovieById,rmMovie} from '../../../actions';
import Link from 'next/link';

const Movie = (props) =>{
    const router = useRouter();
    const {id} = router.query;

    return (
        <div className="container">
            <h3>Movie with id: {id}</h3>
            <div className="jumbotron">
        <h1 className="display-4">{props.selectedmovie.name}</h1>
        <p className="lead">{props.selectedmovie.description}</p>
        <hr className="my-4" />
        <p>{props.selectedmovie.genre}</p>
        <button className="btn btn-primary btn-lg ml-1" href="#" role="button">Learn More</button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
        <button className="btn btn-warning btn-lg ml-1" href="#" role="button" onClick={() =>router.push(`/movies/${id}/edit`)}>Edit</button>
        </Link>
        <button className="btn btn-danger btn-lg ml-1" href="#" role="button" onClick={()=>rmMovie(id,router)}>Delete</button>
      </div>
      <p className="long-desc">
        {props.selectedmovie.longDesc}
      </p>
      <style jsx>{`
      .long-desc {
          font-size: 21px;
      }
      `}</style>
        </div>
    )
};

Movie.getInitialProps =(context) => {
    const {id} = context.query;
    return getMovieById(id).then(movie => {
        return {selectedmovie:movie}
    })
}

export default Movie;