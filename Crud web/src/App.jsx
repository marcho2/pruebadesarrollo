import { useState } from 'react';
import axios from "axios";
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaDeCompras from './components/listadecompras';
import CompraCreate from './components/compraCreate';
import CompraEdit from './components/compraEdit';

function App() {
    const [compras, setCompras] = useState([]); // array donde se guardan las compras

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListaDeCompras compras={compras} setCompras={setCompras} />} />
                    <Route path='/compra/create' element={<CompraCreate compras={compras} setCompras={setCompras} />} />
                    <Route path='/compra/edit/:id' element={<CompraEdit compras={compras} setCompras={setCompras} />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
