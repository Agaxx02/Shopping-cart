interface ProductProps {
	name: string;
	price: number;
	description: string;
	id: number;
}

function Product({ name, price, description }: ProductProps) {
	return (
		<div className='product'>
			<img src='#' alt='product'></img>
			<h2>{name}</h2>
			<h3>{price}$</h3>
			<h4>{description}</h4>
			<button>Add to your cart</button>
		</div>
	);
}

export default Product;
