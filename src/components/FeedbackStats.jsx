import { StyledFeedbackStats } from './styles/FeedbackStats.styled'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedbacks }) => {
	let average =
		feedbacks.reduce((accumulator, current) => {
			return accumulator + current.rating
		}, 0) / feedbacks.length

	average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<StyledFeedbackStats data={feedbacks[0].rating}>
			{average == 0 && <h3>Check the FeedbackStats props!</h3>}
			{average > 0 && <h3>{feedbacks.length} Ratings </h3>}
			{average > 0 ? (
				<h3>Average Rating: {isNaN(average) ? 0 : average} </h3>
			) : null}
		</StyledFeedbackStats>
	)
}

// FeedbackStats Default Props
FeedbackStats.defaultProps = {
	feedbacks: [
		{
			rating: 0,
			text: '',
			id: 1,
		},
	],
}

// FeedbackStats Typechecking PropTypes
FeedbackStats.propTypes = {
	feedbacks: PropTypes.array.isRequired,
}

export default FeedbackStats
