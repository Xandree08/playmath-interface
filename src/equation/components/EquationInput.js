import { useState } from "react";

const EquationInput = ({ showInput, equation, onSubmit, onClose }) => {
    const [answer, setAnswer] = useState('');
  
    if (!showInput) return null;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(answer);
      setAnswer('');
    };
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: '#2c3e50',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          width: '350px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              color: '#ecf0f1',
              fontSize: '1.2em',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
  
          <h3 style={{
            color: '#ecf0f1',
            marginBottom: '20px',
            fontSize: '1.4em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Resolva para se mover:
          </h3>
  
          <div style={{
            fontSize: '1.8em',
            color: '#f1c40f',
            marginBottom: '25px',
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }}>
            {equation}
          </div>
  
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '1.2em',
                borderRadius: '8px',
                border: '2px solid #3498db',
                marginBottom: '20px',
                textAlign: 'center',
                backgroundColor: '#ecf0f1'
              }}
              placeholder="Digite a resposta"
            />
  
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 30px',
                  fontSize: '1.1em',
                  backgroundColor: '#27ae60',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundColor: '#219a52'
                  }
                }}
              >
                Confirmar
              </button>
  
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '12px 30px',
                  fontSize: '1.1em',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundColor: '#c0392b'
                  }
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default EquationInput