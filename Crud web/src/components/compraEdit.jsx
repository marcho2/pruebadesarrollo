import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const CompraEdit = () => {
    const { id } = useParams();
    const [producto, productoChange] = useState("");
    const [precio, precioChange] = useState("");
    const [fechaIngreso, fechaIngresoChange] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://670dde27073307b4ee44b5e1.mockapi.io/productos/productos/${id}`)
            .then(response => {
                productoChange(response.data.producto);
                precioChange(response.data.precio);
                fechaIngresoChange(response.data.fechaIngreso);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const compraActualizada = {
            producto,
            precio,
            fechaIngreso
        };

        axios.put(`https://670dde27073307b4ee44b5e1.mockapi.io/productos/productos/${id}`, compraActualizada)
            .then(() => {
                alert('Compra actualizada exitosamente.');
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
                            <h2>Editar Compra</h2>
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
                            <div className="form-group">
                                <label>Fecha de Ingreso</label>
                                <input type="date" required value={fechaIngreso} onMouseDown={e => valChange(true)} onChange={e => fechaIngresoChange(e.target.value)} className="form-control"></input>
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

export default CompraEdit;
