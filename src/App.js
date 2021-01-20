import { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // Definir los states
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, actualizarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, actualizarCrearGasto] = useState(false);

  // Effect que actualiza el restante
  useEffect(() => {
    // Agregar nuevo presupuesto
    if (crearGasto) {
      actualizarGastos([...gastos, gasto]);

      // Resta del presupuesto
      guardarRestante(restante - gasto.cantidad);

      // Reseatear state
      actualizarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  actualizarCrearGasto={actualizarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado key="1" gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
