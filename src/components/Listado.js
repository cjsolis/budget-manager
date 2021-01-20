import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.length === 0 ? null : (
      <div className="scroller">
        {gastos.map((gasto) => (
          <Gasto key={gasto.id} gasto={gasto} />
        ))}
      </div>
    )}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
