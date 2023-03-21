import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const apiKEY = import.meta.env.VITE_API_KEY

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [streamingLocations, setStreamingLocations] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?${apiKEY}&language=pt-BR`);
            const data = await response.json();
            setMovie(data);

        };

        const getStreamingLocations = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?${apiKEY}`);
            const data = await response.json();
            setStreamingLocations(data.results.BR?.flatrate || []);
        };

        getMovieDetails();
        getStreamingLocations();
    }, [id]);

    return (
        <div>
          <h2>Assista em:</h2><br />
          <ul style={styles.ul}>
            {streamingLocations.map((location, index) => (
              <p key={location.provider_id}>
                {index === streamingLocations.length - 1
                  ? location.provider_name + "."
                  : location.provider_name + ", "}
              </p>
            ))}
          </ul><br />
        </div>
      );
};

const styles = {
    ul: {
        display: "flex",
        flexWrap: "wrap",
        gap: '20px'
    }
}

export default MovieDetails;