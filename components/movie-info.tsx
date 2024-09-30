import {API_URL} from "../app/(home)/page"
import styles from "../css/movie-info.module.css"

export async function getMovieInfo(id:string){
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}

export default async function MovieInfo ({id} : {id:string}) {
    const movie = await getMovieInfo(id);
    return (
        <div className={styles.container}>
            <img 
            className={styles.poster} 
            src={movie.poster_path} 
            alt={movie.original_title} />

            <div className={styles.info}>
                <h1 className={styles.title}>
                    {movie.original_title}
                </h1>
                <h3>
                    ⭐️ {movie.vote_average.toFixed(2)}
                </h3>
                <p>{movie.overview}</p>
                <a 
                href={movie.homepage} 
                target="_blank">
                    Homepage &rarr; 
                </a>
            </div>
        </div>
    )
}