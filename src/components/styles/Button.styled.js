import styled from 'styled-components'

export const StyledButton = styled.button`
	margin-left: 10px;
	padding: 5px 10px;
	cursor: pointer;

	background-color: ${(props) =>
		props.version === 'primary' ? '#b14e84' : '#fff'};
	border: none;
	border-radius: 5px;
	color: ${(props) => (props.version === 'primary' ? '#fff' : '#b14e84')};
	font-size: inherit;

	:active {
		outline: 1px solid #333;
		transform: scale(0.98);
	}

	:disabled {
		background-color: #bfbfbf;
		color: #fff;
	}

	:disabled:hover {
		cursor: not-allowed;
	}
`
