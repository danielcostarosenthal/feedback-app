import { StyledFeedbackStats } from './styles/FeedbackStats.styled'
import { useContext } from 'react'
//import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
	const { feedbacks } = useContext(FeedbackContext)
	let average =
		feedbacks.reduce((accumulator, current) => {
			return accumulator + current.rating
		}, 0) / feedbacks.length

	average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<StyledFeedbackStats data={feedbacks.length === 0 ? 0 : 1}>
			{isNaN(average) && <h3>Data is loading ...</h3>}
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
// FeedbackStats.propTypes = {
// 	feedbacks: PropTypes.array.isRequired,
// }

export default FeedbackStats
