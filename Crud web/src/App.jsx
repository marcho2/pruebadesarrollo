import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>      
        <h1>Lista de compras</h1>
        <table className="thead-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>{/* Ordenar por precio mayor a menor */}
              <th scope="col">Ingreso</th> {/* Ordenar por fecha de ingreso*/}
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}

export default App
