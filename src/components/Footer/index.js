import React from 'react';

import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <div className="whatsapp">
          <i className="fab fa-whatsapp" />
          <p>
            0800 123 222
            <br />
            <span className="whatsapp-text mobile">
              Segunda a sexta de 8h às 22h
            </span>
            <span className="whatsapp-text desktop">Seg - Sex 8h-22h</span>
          </p>
        </div>
        <div className="chat">
          <i className="far fa-comments" />
          <p>
            <span className="chat-text mobile">Chat</span>
            <span className="chat-text desktop">
              Chat ao vivo
              <br />
              Seg - Sex 8h-22h
            </span>
          </p>
        </div>
        <div className="email">
          <i className="far fa-envelope" />
          <p>
            <span className="email-text mobile">E-mail</span>
            <span className="email-text desktop">
              <strong>Mande um e-mail</strong>
              <br />
              Respondemos rapidinho
            </span>
          </p>
        </div>
      </div>
      <div className="info">
        <div className="circle-icon">
          <i className="fas fa-info info-circle" />
        </div>
        <p>
          <span className="info-text mobile">Ajuda</span>
          <span className="info-text desktop">
            <strong>Central de ajuda</strong>
            <br />
            Encontre todas as respostas
          </span>
        </p>
      </div>
      <div className="signature">
        Feito com <i className="far fa-heart" /> pela Quero Educação
      </div>
    </footer>
  );
}

export default Footer;
