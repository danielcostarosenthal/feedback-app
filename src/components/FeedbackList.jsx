import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = (props) => {
	if (!props.feedback || props.feedback.length === 0) {
		return (
			<p className='no-feedback'>
				Please check the props passed to <span>FeedbackList</span> inside the
				root component <span>App</span>.
			</p>
		)
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
