import React from 'react';

interface ProductProps {
	name: string;
	price: number;
	description: string;
	id: number;
}

function Product({ name, price, description }: ProductProps) {
	return (
		<div>
			<h1>{name}</h1>
			<h2>{price}</h2>
			<h2>{description}</h2>
		</div>
	);
}

export default Product;
