/* eslint-disable react/prop-types */
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Input,
} from 'reactstrap';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product, mode = 'store', onQuantityChange }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/login', { state: { from: window.location.pathname } });
  };

  return (
    <Card
      className="mb-3"
      style={{ width: '250px', textAlign: 'center', margin: '10px' }}
    >
      <CardImg
        top
        src={product.image}
        alt={product.title}
        style={{ height: '150px', objectFit: 'contain', paddingTop: '16px' }}
      />
      <CardBody>
        <CardTitle tag="h6">{product.title}</CardTitle>
        <CardText>
          Preço: R$ {product.price.toFixed(2)}
          {mode === 'cart' && (
            <span className="d-block">Quantidade: {product.quantity}</span>
          )}
        </CardText>

        {mode === 'store' ? (
          user ? (
            <Button
              color="success"
              size="sm"
              onClick={() => onQuantityChange(product.id, 1)}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaCartPlus className="me-2" />
                Add
              </span>
            </Button>
          ) : (
            <Button color="primary" size="sm" onClick={handleSeeMore}>
              See more
            </Button>
          )
        ) : (
          <div>
            <Input
              type="number"
              value={product.quantity}
              onChange={
                (e) => onQuantityChange(product.id, parseInt(e.target.value)) // Passa o ID e a nova quantidade
              }
              min="1"
              className="mb-2"
            />
            <Button
              color="danger"
              size="sm"
              onClick={() => onQuantityChange(product.id, 0)} // Passa o ID e quantidade 0 para remover
            >
              Remove
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default ProductCard;
