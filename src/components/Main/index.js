import React from 'react';

import ScholarshipsFilter from '../ScholarshipsFilter';
import ScholarshipAddBtn from '../ScholarshipAddBtn';
import Scholarships from '../Scholarships';

import './styles.css';

function Main() {
  return (
    <main id="main">
      <div className="favorite-scholarships">
        <h1 className="main-title">Bolsas Favoritas</h1>
        <p className="main-description">
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
      </div>
      <ScholarshipsFilter />
      <ScholarshipAddBtn />
      <Scholarships />
    </main>
  );
}

export default Main;
