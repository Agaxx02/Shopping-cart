import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/shopping/shopping-actions';

interface singleItemProps {
	currentItem: any;
	addToCart: (id: number) => void;
}

function Product(product: singleItemProps) {
	const navigate = useNavigate();

	const goBack = () => {
		navigate('/');
	};
	return (
		<div className='singleItem'>
			<img src={product.currentItem.photo} alt='product' className='product-img '></img>
			<section className='itemDetails'>
				<h2>{product.currentItem.name}</h2>
				<h3>{product.currentItem.price}$</h3>
				<h4>{product.currentItem.description}</h4>
				<h6>{product.currentItem.detailedDescription}</h6>
				<button onClick={() => product.addToCart(product.currentItem.id)}>Add to your cart</button>
				<button onClick={goBack}>Go back</button>
			</section>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		currentItem: state.shop.currentItem,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	const action = {
		addToCart: (id: number) => dispatch(addToCart(id)),
	};
	return action;
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
