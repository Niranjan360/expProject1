import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Moviedetails = () => {

    let history = useHistory();    
    let { id } = useParams();
    
    let {data : movie , pending , error} = useFetch("http://localhost:4000/movies/" + id ) ;

    let handleDelete = ()=>{

        fetch("http://localhost:4000/movies/" + id , 
        {
            method:"DELETE"
        }
        )
        .then(()=>{
            alert("Movie has been removed successfully");
            history.push("/");
        })

    }
    
    
    return ( 
        <div className="movie-details">  
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>  }
            {movie &&
                <div>
                    <h1>Movie Name : {movie.movieName} </h1>
                    <hr />
                    <h2>Hero : {movie.hero} </h2>
                    <h2>director : {movie.director} </h2>
                    <h2>genere : {movie.genere} </h2>
                    <p>Stoty line : {movie.storyLine}</p>

                    <button onClick={handleDelete}> Delete </button>
                </div>
            } 
        </div>
    );
}

export default Moviedetails;