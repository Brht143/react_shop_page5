import ProductItem from './ProductItem';
import cookiesList  from '../data/products';

// As per the task, each iteration will return the same product item

const ProductsList = () => cookiesList.map( cookie => <ProductItem />);

export default ProductsList;
