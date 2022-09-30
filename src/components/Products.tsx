import Product from './Product';
import { connect } from 'react-redux';

interface ProductsProps {
	products: Object[];
}

const Products = ({ products }: ProductsProps) => {
	return (
		<div>
			{/* {products.map((product: Object) => (
				<Product  key={product.id} product={product} />
			))} */}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		products: state.shop.products,
	};
};
export default connect(mapStateToProps)(Products);
