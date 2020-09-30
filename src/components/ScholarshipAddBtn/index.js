import React from 'react';

import './styles.css';

function ScholarshipAddBtn() {
  return (
    <div className="add-scholarship">
      <button className="add-scholarship-btn" onClick>
        <div className="plus-icon">
          <i className="fas fa-plus" />
        </div>
      </button>
      <h3 className="scholarship-title">Adicionar bolsa</h3>
      <p className="add-scholarship-description">
        Clique para adicionar bolsas de
        <br />
        cursos do seu interesse
      </p>
    </div>
  );
}

export default ScholarshipAddBtn;
