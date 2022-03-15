import styled from 'styled-components'

export const StyledFeedbackStats = styled.div`
	width: 100%;
	max-width: 475px;
	margin: 30px auto;
	display: flex;
	justify-content: ${({ data }) => (data === 0 ? 'center' : 'space-between')};

	color: #fff;
	text-align: center;
`
