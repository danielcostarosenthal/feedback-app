import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = (props) => {
	return (
		<Card>
			<div className='card-rating'>{props.item.rating}</div>
			<button
				className='card-delete'
				onClick={() => props.handleDelete(props.item.id)}>
				<FaTimes color='#b14e84' />
			</button>
			<div className='card-text'>{props.item.text}</div>
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
