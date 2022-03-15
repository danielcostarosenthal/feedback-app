import styled from 'styled-components'

export const StyledFeedbackForm = styled.div`
	width: 100%;
	max-width: 475px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: ${({ data }) =>
		data === 0 ? 'center' : 'space-between'}; */
	justify-content: center;

	h2 {
		margin-bottom: 30px;
	}

	.input-group {
		width: 100%;
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		border: 1.5px solid #b14e84;
		border-radius: 5px;
	}

	input {
		width: 100%;
		height: 35px;
		border: none;
		outline: none;
	}
`
