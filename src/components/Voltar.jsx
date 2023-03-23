import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Voltar = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
      <a onClick={handleGoBack}><p>Voltar</p></a>
  );
}

export default Voltar;