import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

interface navProp {
	cart: object[];
}

function Navbar(props: navProp) {
	const [cartCount, setCartCount] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		let count = 0;
		props.cart.forEach((item: any) => {
			count += item.qty;
		});
		setCartCount(count);
	}, [props.cart, cartCount]);

	const goToCart = () => {
		navigate('/cart');
	};
	return (
		<div className='Navbar'>
			<span>E-commerence</span>
			<input type='text' placeholder='search'></input>
			<div className='cartContainer' onClick={goToCart}>
				<div className='imgContainer'>
					<img className='cartIcon' alt='shopping cart' src='./shopping-cart.png'></img>
				</div>
				<div className='cartCount'>
					<h4>{cartCount}</h4>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
