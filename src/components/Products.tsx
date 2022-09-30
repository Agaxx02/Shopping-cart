import Product from './Product';

const products = [
	{ name: 'Apple MacBook', price: 1200, description: 'An apple Macbook', id: 1 },
	{ name: 'Apple Watch', price: 800, description: 'An apple watch', id: 2 },
	{ name: 'Xiaomi phone', price: 4200, description: 'A Xiaomi phone', id: 3 },
];

function Products() {
	return (
		<div className='products'>
			{products.map((product) => {
				return <Product key={product.id} {...product} />;
			})}
		</div>
	);
}

export default Products;
