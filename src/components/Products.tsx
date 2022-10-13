import Product from './Product';
import { connect } from 'react-redux';

interface ProductsProps {
	products: Object[];
}

type stateType = {
	shop: {
		products: Object[];
		cart: Object[];
		currentItem: Object | null;
	};
};

const Products = ({ products }: ProductsProps) => {
	return (
		<div className='shop-flex'>
			{products.map((product: any) => {
				return <Product key={product.id} {...product} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: stateType) => {
	return {
		products: state.shop.products,
	};
};
export default connect(mapStateToProps)(Products);
