function Navbar() {
	return (
		<div className='Navbar'>
			<input type='text' placeholder='search'></input>
			<div className='cartContainer'>
				<img className='cartIcon' alt='shopping cart' src='./shopping-cart.png'></img>
			</div>
		</div>
	);
}

export default Navbar;
