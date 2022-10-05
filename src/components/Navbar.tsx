import { useEffect, useState } from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
export interface cartProp {
	cart: object[];
}

function Navbar(props: cartProp) {
	const [cartCount, setCartCount] = useState(0);
	const [showCart, setShowCart] = useState(false);

	useEffect(() => {
		let count = 0;
		props.cart.forEach((item: any) => {
			count += item.qty;
		});
		setCartCount(count);
	}, [props.cart, cartCount]);
	return (
		<div className='Navbar'>
			<span>E-commerence</span>
			<input type='text' placeholder='search'></input>
			<span>{cartCount}</span>
			<div
				className='cartContainer'
				onClick={() => {
					setShowCart(true);
				}}
			>
				<img className='cartIcon' alt='shopping cart' src='./shopping-cart.png'></img>
				{showCart ? <Cart /> : null}
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
