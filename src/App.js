import React from 'react';
import './App.css';
import useRequest from './hooks/useRequest';
import styled from 'styled-components';

function App() {
	const { data, loading, error } = useRequest('http://localhost:3000/recipes');
	console.log('test', data);
	if (loading)
		return (
			<LoadingDiv>
				<h1>Loading...</h1>
			</LoadingDiv>
		);
	if (error.error)
		return (
			<LoadingDiv>
				<h2>Oops! Something went wrong... {error.error.message}</h2>
			</LoadingDiv>
		);
	return (
		<div className='App'>
			{data.map((user, index) => (
				<div key={index}>
					<div>{user.recipeName}</div>
					<div>{user.recipeURL}</div>
				</div>
			))}
		</div>
	);
}

export default App;

const LoadingDiv = styled.div`
	color: white;
	margin-top: 15%;
`;
