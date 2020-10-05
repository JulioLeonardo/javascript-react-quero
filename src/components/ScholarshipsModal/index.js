import React from 'react';

import './styles.css';

function ScholarshipsModal({ toggleShowModal }) {
  return (
    <div className="scholarships-modal">
      <button className="close-modal" onClick={toggleShowModal}>
        +
      </button>
      <div className="modal-content">
        <h3 className="scholarships-modal-title">Adicionar bolsa</h3>
        <p className="scholarships-modal-description">
          Filtre e adicione as bolsas de seu interesse.
        </p>
        <label htmlFor="cities">SELECIONE SUA CIDADE</label>
        <select name="cities" id="cities">
          <option value="">Todas as cidades</option>
        </select>
        <label htmlFor="course">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
        <select name="course" id="course">
          <option value="">Todos os cursos</option>
        </select>
        <div className="course-style">
          <p className="fieldset-label">COMO VOCÊ QUER ESTUDAR?</p>
          <label htmlFor="presential">
            <input
              type="checkbox"
              name="presential"
              id="presential"
              value="presential"
            />
            <span className="input-label">Presencial</span>
          </label>
          <label htmlFor="distance-learning">
            <input
              type="checkbox"
              name="distance-learning"
              id="distance-learning"
              value="distance-learning"
            />
            <span className="input-label">A distância</span>
          </label>
        </div>
        <div className="course-price-range">
          <p className="fieldset-label">ATÉ QUANTO PODE PAGAR?</p>
          <p className="course-price-limit">R$10.000</p>
          <input type="range" name="price-limt" id="price-limit" />
        </div>
        <div className="scholarships-list-header">
          <div className="scholarships-list-header-titles">
            <p>Resultado:</p>
            <p>Odenar por</p>
          </div>
          <div className="scholarships-list-header-filter">
            <p>Nome da faculdade</p>
            <i id="chevron-down" className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipsModal;
