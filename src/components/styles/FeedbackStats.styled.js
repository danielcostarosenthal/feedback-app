import styled from 'styled-components'

export const StyledFeedbackStats = styled.div`
	width: 100%;
	max-width: 475px;
	margin: 30px auto;
	display: flex;
	justify-content: ${(props) =>
		props.data === 0 ? 'center' : 'space-between'};

	color: #fff;
`
