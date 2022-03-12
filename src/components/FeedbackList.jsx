import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = (props) => {
	if (!props.feedback || props.feedback.length === 0) {
		return <p className='no-feedback'>No Feedbacks to be displayed...</p>
	}

	return (
		<ul>
			{props.feedback.map((item) => (
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={props.handleDelete}
				/>
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
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
}

export default FeedbackList
