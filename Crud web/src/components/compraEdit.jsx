import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompraEdit = ({ compras, setCompras }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const compraEditar = compras.find(compra => compra.id === parseInt(id));
}