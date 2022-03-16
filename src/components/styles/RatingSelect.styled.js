import styled from 'styled-components'

export const StyledRatingSelect = styled.ul`
	width: 100%;
	max-width: 475px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 30px;

	list-style: none;

	li {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		position: relative;
	}

	li + li {
		margin-left: 10px;
	}

	input {
		appearance: none;
	}

	input:checked + label,
	label:hover {
		background-color: #b14e84;
		color: #fff;
	}

	label {
		position: absolute;
		width: 30px;
		height: 30px;

		background-color: #efefef;
		border-radius: 50%;
		cursor: pointer;
		line-height: 30px;
		text-align: center;
	}
`
