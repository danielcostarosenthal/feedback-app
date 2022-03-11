import styled from 'styled-components'

export const StyledCard = styled.div`
	width: 100%;
	max-width: 350px;
	margin: 30px 0;
	padding: 30px 20px;
	position: relative;

	background-color: #fff;
	border-radius: 5px;

	.card-rating {
		position: absolute;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		transform: translate(-50%, -50%);

		background-color: #b14e84;
		border-radius: 50%;
		color: #fff;
		font-weight: bold;
		font-size: 1.25rem;
		line-height: 40px;
		text-align: center;
	}

	.card-text {
		color: #333;
		font-style: italic;
	}

	button {
		margin-top: 30px;
		padding: 5px 20px;

		background-color: #b14e84;
		border: 0;
		border-radius: 5px;
		color: #fff;
		font-size: inherit;
		outline: none;
	}
`
