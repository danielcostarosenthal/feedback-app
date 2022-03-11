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

export default FeedbackList
