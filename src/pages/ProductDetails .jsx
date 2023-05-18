import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { productId } = useParams();
  console.log('params:', productId);
  return (
    <>
      <div>ProductDetails! </div>
      <p> Name:{productId} </p>
    </>
  );
};
