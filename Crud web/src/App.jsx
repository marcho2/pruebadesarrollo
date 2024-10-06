import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaDeCompras from "./components/listadecompra";


function App() {
  const [compras] = useState([
    { id: 1, producto: 'pc gamer', precio: 1200, fecha_ingreso: '04/10/2024' },
    { id: 2, producto: 'iphone', precio: 800, fecha_ingreso: '05/10/2024' },
  ]);
  return (
    <>
      <div>
        <h1>Lista de compras</h1>
        <ListaDeCompras compras={compras} />
      </div>
    </>
  );
}

export default App;
