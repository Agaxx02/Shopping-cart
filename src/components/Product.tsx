interface ProductProps {
	name: string;
	price: number;
	description: string;
	id: number;
	photo: string;
}

function Product({ name, price, description, photo }: ProductProps) {
	return (
		<div className='product'>
			<img src={photo} alt='product' className='product-img'></img>
			<h2>{name}</h2>
			<h3>{price}$</h3>
			<h4>{description}</h4>
			<button>Add to your cart</button>
		</div>
	);
}

export default Product;
