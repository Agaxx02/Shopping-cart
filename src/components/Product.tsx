import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shopping-actions';

interface ProductProps {
	name: string;
	price: number;
	description: string;
	id: number;
	photo: string;
}
interface DispatchProps {
	addToCart: (id: number) => void;
}
type PropsType = ProductProps & DispatchProps;

function Product(product: PropsType) {
	console.log(product);
	return (
		<div className='product'>
			<img src={product.photo} alt='product' className='product-img'></img>
			<h2>{product.name}</h2>
			<h3>{product.price}$</h3>
			<h4>{product.description}</h4>
			<button>View item</button>
			<button onClick={() => product.addToCart(product.id)}>Add to your cart</button>
		</div>
	);
}
const mapDispatchToProps = (dispatch: any) => {
	const action = {
		addToCart: (id: number) => dispatch(addToCart(id)),
	};
	console.log(action);
	return action;
};

export default connect(null, mapDispatchToProps)(Product);
