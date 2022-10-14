import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../redux/shopping/shopping-actions';

interface ProductProps {
	name: string;
	price: number;
	description: string;
	id: number;
	photo: string;
}
interface DispatchProps {
	addToCart: (id: number) => void;
	loadCurrentItem: (item: Object) => void;
}
type PropsType = ProductProps & DispatchProps;

function Product(product: PropsType) {
	return (
		<div className='shop'>
			<img src={product.photo} alt='product' className='product-img '></img>
			<h2>{product.name}</h2>
			<h3>{product.price}$</h3>
			<h4>{product.description}</h4>
			<Link to={`/product`}>
				<button onClick={() => product.loadCurrentItem(product)}>View item</button>
			</Link>
			<button onClick={() => product.addToCart(product.id)}>Add to your cart</button>
		</div>
	);
}
const mapDispatchToProps = (dispatch: any) => {
	const action = {
		addToCart: (id: number) => dispatch(addToCart(id)),
		loadCurrentItem: (item: Object) => dispatch(loadCurrentItem(item)),
	};
	return action;
};

export default connect(null, mapDispatchToProps)(Product);
