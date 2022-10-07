import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface cartProps {
	cart: object[];
}

function Cart(props: cartProps) {
	const navigate = useNavigate();

	const goBack = () => {
		navigate('/');
	};
	return (
		<div>
			{props.cart.map((item: any) => {
				return (
					<div key={item.id}>
						<img className='product-img' src={item.photo} alt='Product'></img>
						<h3>{item.name}</h3>
						<h4>{item.qty}</h4>
					</div>
				);
			})}
			<button onClick={goBack}>Go back</button>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cart);
