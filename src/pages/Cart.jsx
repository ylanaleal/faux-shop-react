/* eslint-disable react/prop-types */
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Button,
  Table,
  Input,
} from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Product = ({ item, onChange }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img src={item.image} alt={item.title} width="50" className="me-3" />
          {item.title}
        </div>
      </td>
      <td>R$ {item.price.toFixed(2)}</td>
      <td>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => onChange(item.id, parseInt(e.target.value) || 1)}
          min="1"
          style={{ width: '70px' }}
        />
      </td>
      <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <Button color="danger" size="sm" onClick={() => onChange(item.id, 0)}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const { cart, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container
      style={{
        minHeight: 'calc(100vh - 105px)',
        paddingBottom: '25px',
        paddingTop: '20px',
      }}
    >
      <h2 className="mb-4" style={{ fontWeight: 'bold' }}>
        Your cart
      </h2>

      {cart.length === 0 ? (
        <Card className="text-center p-5">
          <CardText>Your cart is empty.</CardText>
        </Card>
      ) : (
        <>
          <Table responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <Product key={item.id} item={item} onChange={updateQuantity} />
              ))}
            </tbody>
          </Table>

          <Card className="mt-4">
            <CardBody>
              <Row>
                <Col sm="12" className="text-end">
                  <h5>
                    Total: <strong>R$ {total.toFixed(2)}</strong>
                  </h5>
                  <span
                    style={{
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'end',
                      marginTop: '20px',
                    }}
                  >
                    <Button color="danger" onClick={clearCart}>
                      Delete All
                    </Button>

                    <Button color="success">Finish Purchase</Button>
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;
