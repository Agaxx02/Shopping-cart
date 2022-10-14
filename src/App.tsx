import './App.scss';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleItem from './components/SingleItem';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/product' element={<SingleItem />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
