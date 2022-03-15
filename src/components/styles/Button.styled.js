import styled from 'styled-components'

export const StyledButton = styled.button`
	padding: 5px 10px;
	cursor: pointer;

	background-color: ${(props) =>
		props.version === 'primary' ? '#b14e84' : '#fff'};
	border: none;
	border-radius: 5px;
	color: ${(props) => (props.version === 'primary' ? '#fff' : '#b14e84')};
	font-size: inherit;
	outline: none;

	:active {
		transform: scale(0.98);
	}
`
