import './App.css';
// Importa a modal do react-modal
import { useState } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import { BounceLoader } from 'react-spinners';

// código necessário para os recursos de acessibilidade
Modal.setAppElement('#root')

function App() {

  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  function abrirModal() {
    setLoading(true);

    // Simula um processo assíncrono (substitua pelo seu carregamento real)
    setTimeout(() => {
      setIsOpen(true);
      setLoading(false);
    }, 1000); // Exemplo: aguarda 1 segundo antes de abrir a modal
  }

  function fecharModal() {
    setIsOpen(false);
  }

  // Código JSX necessário para criar uma modal simples que abre e fecha
  return (
    <div>
      <button onClick={abrirModal}>Abrir Modal</button>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel='Modal de exemplo'
        overlayClassName="modal-overlay"
        closeTimeoutMS={200}
      >
        <h2>Olá</h2>
        <button
          onClick={fecharModal}
        >
          Fechar
        </button>
        <div>Eu sou um modal</div>
      </Modal>
      {loading && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <BounceLoader color="#123abc" loading={loading} css={override} size={150} />
        </div>
      )}
    </div>
  );
}

// Estilo do Loader usando @emotion/css
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;


export default App;
