import React, { useState } from 'react';
import axios from 'axios';
import useRequest from '../hooks/useRequest';
import styled from 'styled-components';

const PostRecipe = () => {
	const [recipe, setRecipe] = useState({
		recipeName: '',
		recipeURL: '',
	});
	const { data } = useRequest('http://localhost:4000/api/recipes', recipe);
	const onChange = (e) => {
		e.preventDefault();
		setRecipe({
			recipeName: e.target.value,
		});
	};
	const onSubmit = (e) => {
		axios.post('http://localhost:4000/api/recipe', recipe);
		console.log(recipe);
	};
	return (
		<div>
			<input type='text' onChange={onChange} />
			<button onClick={onSubmit}>Submit</button>
			<div></div>
		</div>
	);
};

export default PostRecipe;
