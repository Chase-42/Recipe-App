import React, { useState, useEffect } from 'react';
import useRequest from '../hooks/useRequest';
import styled from 'styled-components';

export default function Recipes() {
	const { data, loading, error } = useRequest(
		'http://localhost:4000/api/recipes'
	);

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

const LoadingDiv = styled.div`
	color: black;
	margin-top: 15%;
`;
