import { connect } from 'react-redux';
import { cartProp } from './Navbar';

function Cart(props: cartProp) {
	return (
		<div>
			{props.cart.map((item: any) => {
				return (
					<div key={item.id}>
						<h3>{item.name}</h3>
						<h4>{item.qty}</h4>
					</div>
				);
			})}
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cart);
