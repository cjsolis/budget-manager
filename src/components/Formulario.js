import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ guardarGasto, actualizarCrearGasto }) => {
  //States
  const [nombre, actualizarNombre] = useState("");
  const [cantidad, actualizarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);
    actualizarCrearGasto(true);

    // Construir los gastos
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    guardarGasto(gasto);

    // Resetear el form
    actualizarNombre("");
    actualizarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto." />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => actualizarNombre(e.target.value)}
        />

        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => actualizarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  actualizarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
