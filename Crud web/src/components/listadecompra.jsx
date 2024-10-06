import React from 'react';

const ListaDeCompras = ({ compras }) => {
  return (
    <table className="table table-striped-columns">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Fecha de Ingreso</th>
        </tr>
      </thead>
      <tbody>
        {compras.map((compra) => (
          <tr key={compra.id}>
            <td>{compra.id}</td>
            <td>{compra.producto}</td>
            <td>${compra.precio}</td>
            <td>{compra.fecha_ingreso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaDeCompras;
