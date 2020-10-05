import React from 'react';

import './styles.css';

function ScholarshipsFilter() {
  return (
    <div id="filter" className="scholarships-filter">
      <ul>
        <li>
          {' '}
          <a href="#filter">Todos os semestres</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#filter">2° semestre de 2019</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#filter">1° semestre de 2020</a>{' '}
        </li>
      </ul>
    </div>
  );
}

export default ScholarshipsFilter;
