import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompraEdit from "./compraEdit";
import axios from "axios";

const ListaDeCompras = () => {
    const [compras, setCompras] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://670dde27073307b4ee44b5e1.mockapi.io/productos/productos')
            .then(response => setCompras(response.data))
            .catch(error => console.log(error));
    }, []);
    const removeCompra = (id) => {
        if (window.confirm('¿Desea eliminar esta compra?')) {
            axios.delete(`https://670dde27073307b4ee44b5e1.mockapi.io/productos/productos/${id}`)
                .then(() => {
                    const nuevasCompras = compras.filter(compra => compra.id !== id);
                    setCompras(nuevasCompras);
                })
                .catch(error => console.log(error));
        }
    }
    const loadEdit = (id) => {
        navigate("/compra/edit/" + id);
    }
    
    return (
        <div className="container">
            <div className="card">
                <div>
                    <h1>Listado de Compras</h1>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="compra/create" className="btn btn-success">Agregar Nueva</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Producto</td>
                                <td>Precio</td>
                                <td>Fecha de Ingreso</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {compras && compras.map(compra => (
                                    <tr key={compra.id}>
                                        <td>{compra.id}</td>
                                        <td>{compra.producto}</td>
                                        <td>{compra.precio}</td>
                                        <td>{compra.fechaIngreso}</td>
                                        <td>
                                            <button onClick={() => loadEdit(compra.id)} className="btn btn-primary">Editar</button>
                                            <button onClick={() => removeCompra(compra.id)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListaDeCompras;
