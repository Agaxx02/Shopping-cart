import './App.scss';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Products />
		</div>
	);
}

export default App;
