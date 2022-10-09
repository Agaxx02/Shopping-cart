import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adjustQty, removeFromCart } from '../redux/shopping/shopping-actions';

interface cartProps {
	cart: object[];
	adjustQty: (itemID: number, value: number) => void;
	removeFromCart: (itemID: number) => void;
}

function Cart(props: cartProps) {
	const navigate = useNavigate();

	const countFinalAmout = () => {
		let totalAmount = 0;
		props.cart.forEach((item: any) => {
			totalAmount += item.price * item.qty;
		});
		return totalAmount;
	};

	const goBack = () => {
		navigate('/');
	};
	return (
		<div className='cart'>
			{props.cart.map((item: any) => {
				if (item.qty === 0) {
					return null;
				}
				return (
					<div key={item.id} className='cartProduct'>
						<img className='product-img' src={item.photo} alt='Product'></img>
						<section className='product-info'>
							<h3>{item.name}</h3>
							<h4>{item.description}</h4>
							<section className='changeQty'>
								<span onClick={() => props.adjustQty(item.id, item.qty - 1)}>-</span>
								<h4>{item.qty}</h4>
								<span onClick={() => props.adjustQty(item.id, item.qty + 1)}>+</span>
							</section>
							<h3>Price: {item.price}$</h3>
						</section>
						<section className='product-buttons'>
							<button>View item</button>
							<button
								onClick={() => {
									props.removeFromCart(item.id);
								}}
							>
								Remove
							</button>
						</section>
					</div>
				);
			})}

			<h4>Total amount:</h4>
			<span>{countFinalAmout()} $</span>
			<button onClick={goBack}>Go back</button>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		cart: state.shop.cart,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	const action = {
		adjustQty: (itemID: number, value: number) => dispatch(adjustQty(itemID, value)),
		removeFromCart: (itemID: number) => dispatch(removeFromCart(itemID)),
	};
	return action;
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
