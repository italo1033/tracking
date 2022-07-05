import { useState } from "react";
import "../style/App.css";
import TrackingResult from "./TrackingResult";
import { FiSearch } from "react-icons/fi";
const Main = () => {
const [dataFinal, setDataFina] = useState([]);

  const submitHanlder = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
      .then(response => response.json())
      .then(result => {
        const dataFinal = result.resultdo
          setDataFina(dataFinal);
      })
      .catch(console.error);
  };
  if(dataFinal === 'Pedido inexistente em nosso banco de dados'){
    alert('Pedido inexistente em nosso banco de dados');

  }else if(dataFinal.length > 0 && dataFinal !== 'Pedido inexistente em nosso banco de dados') return <TrackingResult dataTracking={dataFinal} />;


  return (
      <div className="containerGeral">
          <div className="container">
            <h1>Rastreamento do Produto</h1>
            <form onSubmit={submitHanlder}>
              <div className="form-group">
                <input type="text" placeholder="Digite o código de Rastreio" name="tracking" />
                <button type="submit">
                <FiSearch />
              </button>
              </div>
            </form>
          </div>
      </div>
  );

}

export default Main;