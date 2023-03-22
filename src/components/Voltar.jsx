import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Voltar = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
      <a onClick={handleGoBack}>Voltar</a>
  );
}

export default Voltar;