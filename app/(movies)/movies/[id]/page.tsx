
import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"
import { API_URL } from "../../../contants"

interface IParams {
    params : {id:string}
}

async function getMovie (id:string) {
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}

export async function generateMetadata({params: {id}}: IParams){
    const movie = await getMovie(id)
    return {
        title:movie.original_title
    }
}

export default async function MovieDetail ({ params : {id} }: IParams) {
    return (
        <div>
            <Suspense fallback={<h2>Loading movie info</h2>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h2>Loading movie videos</h2>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}