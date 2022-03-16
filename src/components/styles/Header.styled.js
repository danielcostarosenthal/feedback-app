import styled from 'styled-components'

export const StyledHeader = styled.header`
	width: 100%;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.4);

	.header-container {
		max-width: 475px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		color: #fff;
	}

	img {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 425px) {
		.header-container {
			flex-direction: column;
		}

		img {
			margin-bottom: 30px;
		}
	}
`
