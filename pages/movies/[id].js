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
        <p className="lead">{props.selectedmovie.description}</p>
        <hr className="my-4" />
        <p>{props.selectedmovie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p className="long-desc">
        {props.selectedmovie.longdescription}
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