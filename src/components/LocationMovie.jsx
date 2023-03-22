import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserSecret } from 'react-icons/fa'

const apiKEY = import.meta.env.VITE_API_KEY

const MovieDetails = () => {
  const { id } = useParams();
  const [streamingLocations, setStreamingLocations] = useState([]);

  useEffect(() => {

    const getStreamingLocations = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?${apiKEY}`);
      const data = await response.json();
      setStreamingLocations(data.results.BR?.flatrate || []);
    };

    getStreamingLocations();
  }, [id]);

  return (
    <div>
      <h2>Assista em:</h2><br />
      <ul style={styles.ul}>
        {streamingLocations.length === 0 && <p style={styles.p}><FaUserSecret />Procure em sites não oficiais</p>}
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
  },
  p: {
    display: "flex",
    alignItems: "center"
  }
}

export default MovieDetails;