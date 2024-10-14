import { useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaDeCompras from './components/listadecompras';
import CompraCreate from './components/compraCreate';

function App() {
    const [compras, setCompras] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< ListaDeCompras compras={compras} setCompras={setCompras} />}></Route>
                    <Route path='/compra/create' element={<CompraCreate compras={compras} setCompras={setCompras} />}></Route>
                    <Route path='/compra/edit/:id' element={<CompraEdit compras={compras} setCompras={setCompras} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
