import { AnimatePresence, motion } from 'framer-motion'
import { StyledFeedbackList } from './styles/FeedbackList.styled'
import { useContext } from 'react'
//import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = ({ handleDelete }) => {
	const { feedbacks } = useContext(FeedbackContext)

	if (!feedbacks || feedbacks.length === 0) {
		return (
			<p className='no-feedback'>
				Please check the props passed to <span>FeedbackList</span> inside the
				root component <span>App</span>.
			</p>
		)
	}

	return (
		<StyledFeedbackList>
			<AnimatePresence>
				{feedbacks.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</StyledFeedbackList>
	)
}

// FeedbackList Typechecking PropTypes
// FeedbackList.propTypes = {
// 	feedbacks: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			rating: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			id: PropTypes.number.isRequired,
// 		})
// 	),
// }

export default FeedbackList
