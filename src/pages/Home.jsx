import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div>Erro ao carregar produtos.</div>;

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Container
      style={{
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          mode="store"
          onQuantityChange={handleAddToCart}
        />
      ))}
    </Container>
  );
};

export default Home;
