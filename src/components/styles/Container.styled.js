import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;

	/* Styles for when all feebacks had been deleted or no feedback */
	.no-feedback {
		max-width: 525px;
		margin: 50px auto;

		color: #fff;
		font-size: 1.25rem;
		text-align: center;
	}

	.no-feedback span {
		font-style: italic;
		font-weight: bold;
	}
`
