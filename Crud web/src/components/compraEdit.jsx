import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompraEdit = ({ compras, setCompras }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const compraEditar = compras.find(compra => compra.id === parseInt(id));
    const [producto, productoChange] = useState("");
    const [precio, precioChange] = useState("");
    const [fechaIngreso, fechaIngresoChange] = useState("");
    useEffect(() => {
        if (compraExistente) {
            productoChange(compraExistente.producto);
            precioChange(compraExistente.precio);
            fechaIngresoChange(compraExistente.fechaIngreso);
        }
    }, [compraExistente]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const compraActualizada = {
            id: parseInt(id),
            producto,
            precio,
            fechaIngreso,
        };
        const nuevasCompras = compras.map(compra => compra.id === parseInt(id) ? compraActualizada : compra);
        setCompras(nuevasCompras);
        alert('Compra actualizada exitosamente.');
        navigate('/');
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
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Producto</label>
                                        <input required value={producto} onChange={e => productoChange(e.target.value)} className="form-control"></input>
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
                                        <label>Fecha de Ingreso</label>
                                        <input type="date" value={fechaIngreso} onChange={e => fechaIngresoChange(e.target.value)} className="form-control"></input>
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

export default CompraEdit;
