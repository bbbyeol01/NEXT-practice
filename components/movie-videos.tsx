import { Suspense } from "react";
import { API_URL } from "../app/contants";
import styles from "../css/movie-video.module.css"

async function getVideos(id:string){
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json()
}

export default async function MovieVideos({id} : {id:string}){
    const videos = await getVideos(id);
    return (
            <div className={styles.container}>
                {videos.map((video) => 
                <Suspense fallback={<p><h1>Loading...</h1></p>}>
                    <iframe
                    key={video.id} 
                    src={`https://youtube.com/embed/${video.key}`} 
                    allowFullScreen
                    title={video.name}
                    />
                </Suspense>
                )}
            </div>
            )
}