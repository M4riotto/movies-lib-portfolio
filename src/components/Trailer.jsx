import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai'

const apiKEY = import.meta.env.VITE_API_KEY

const Trailer = () => {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {

        const getTrailers = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?${apiKEY}&language=pt-BR`);
            const data = await response.json();
            setTrailers(data.results);
        };


        getTrailers();
    }, [id]);


    return (
        <div>
            <h2>Trailer:</h2>
            <ul style={styles.ul}>
                {trailers.length === 0 && <p>Sem trailer...</p>}
                {trailers.length > 0 && trailers.map((trailer) => <li key={trailer.id}>
                    <a style={styles.a} href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank"> <AiFillPlayCircle />Reproduzir</a>
                </li>

                )}
            </ul>
        </div>
    );

}

const styles = {
    ul: {
        listStyle: "none"
    },
    a: {
        display: "flex",
        alignItems: "center"
    }
}

export default Trailer
