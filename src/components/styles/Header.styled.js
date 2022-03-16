import styled from 'styled-components'

export const StyledHeader = styled.header`
	width: 100%;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.4);
	color: #fff;

	img {
		width: 50px;
		height: 50px;
		margin-right: 20px;
	}

	@media (max-width: 425px) {
		flex-direction: column;

		img {
			margin: 0 0 20px 0;
		}
	}
`
