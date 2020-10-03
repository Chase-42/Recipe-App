import React from 'react';
import './App.css';
import Recipe from './components/recipes';
import PostRecipe from './components/postRecipe';

function App() {
	return (
		<div className='App'>
			<Recipe />
			<PostRecipe />
		</div>
	);
}

export default App;
