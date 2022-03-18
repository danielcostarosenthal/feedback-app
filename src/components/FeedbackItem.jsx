import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='card-rating'>{item.rating}</div>
			<button className='card-delete' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='#b14e84' />
			</button>
			<button className='card-edit' onClick={() => editFeedback(item)}>
				<FaEdit color='#4682b4' />
			</button>
			<div className='card-text'>{item.text}</div>
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
