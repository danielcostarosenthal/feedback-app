import PropTypes from 'prop-types'
import Card from './shared/Card'

const FeedbackItem = (props) => {
	const handleClick = (item) => {
		console.log(`Rating: ${item.rating}`)
		console.log(`Text: ${item.text}`)
		console.log(`ID: ${item.id}`)
	}

	return (
		<Card>
			<div className='card-rating'>{props.item.rating}</div>
			<div className='card-text'>{props.item.text}</div>
			<button
				onClick={() => {
					handleClick(props.item)
				}}>
				Click
			</button>
		</Card>
	)
}

// FeedbackItem Default Props
FeedbackItem.defaultProps = {
	item: {
		rating: 0,
		text: 'The feedback text is missing. Please reload application or try later.',
		id: 1,
	},
}

// FeedbackItem Typechecking PropTypes
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
