import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const CompraCreate = ({ compras, setCompras }) => {
    const [producto, productoChange] = useState("");
    const [precio, precioChange] = useState("");
    const [validation, valChange] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const currentDateTime = new Date();
        const dia = currentDateTime.getDate();
        const mes = currentDateTime.getMonth() + 1;
        const año = currentDateTime.getFullYear();
        const fechaIngreso = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;

        const nuevaCompra = {
            id: compras.length + 1,
            producto,
            precio,
            fechaIngreso,
        };
        setCompras([...compras, nuevaCompra]);

        alert('Compra guardada exitosamente.');
        navigate('/');
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
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Producto</label>
                                        <input required value={producto} onMouseDown={e => valChange(true)} onChange={e => productoChange(e.target.value)} className="form-control"></input>
                                        {producto.length === 0 && validation && <span className="text-danger">Ingrese el nombre del producto</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Precio</label>
                                        <input type="number" value={precio} onChange={e => precioChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Guardar</button>
                                        <Link to="/" className="btn btn-danger">Volver</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CompraCreate;
