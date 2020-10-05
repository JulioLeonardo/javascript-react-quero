import React, { useState } from 'react';

import ScholarshipsModal from '../ScholarshipsModal';
import './styles.css';

function ScholarshipAddBtn() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="add-scholarship">
      <button className="add-scholarship-btn" onClick={toggleShowModal}>
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
      {showModal && <ScholarshipsModal toggleShowModal={toggleShowModal} />}
    </div>
  );
}

export default ScholarshipAddBtn;
