import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const CompraCreate = () => {
    const [producto, productoChange] = useState("");
    const [precio, precioChange] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDateTime = new Date();
        const dia = currentDateTime.getDate();
        const mes = currentDateTime.getMonth() + 1;
        const año = currentDateTime.getFullYear();
        const fechaIngreso = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;

        const nuevaCompra = {
            producto,
            precio,
            fechaIngreso
        };

        axios.post('https://670dde27073307b4ee44b5e1.mockapi.io/productos/productos', nuevaCompra)
            .then(() => {
                alert('Compra guardada exitosamente.');
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{ textAlign: "left" }}>
                        <div className="card-title">
                            <h2>Crear Compra</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Producto</label>
                                <input required value={producto} onMouseDown={e => valChange(true)} onChange={e => productoChange(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input type="number" required value={precio} onMouseDown={e => valChange(true)} onChange={e => precioChange(e.target.value)} className="form-control"></input>
                            </div>
                            <button className="btn btn-success" type="submit">Guardar</button>
                            <Link to="/" className="btn btn-danger">Volver</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CompraCreate;
