import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = (props) => {
	if (!props.feedback || props.feedback.length === 0) {
		return <p>No Feedback to be Displayed</p>
	}

	return (
		<ul>
			{props.feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</ul>
	)
}

// FeedbackList Default Props
FeedbackList.defaultProps = {
	feedback: [
		{
			rating: 0,
			text: 'The feedback text is missing. Please reload application or try later.',
			id: 1,
		},
	],
}

// FeedbackList Typechecking PropTypes
FeedbackList.propTypes = {
	feedback: PropTypes.array.isRequired,
}

export default FeedbackList
