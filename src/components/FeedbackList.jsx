import { AnimatePresence, motion } from 'framer-motion'
import { StyledFeedbackList } from './styles/FeedbackList.styled'
import { useContext } from 'react'
//import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
	const { feedbacks, isLoading } = useContext(FeedbackContext)

	if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
		return (
			<p className='no-feedback'>
				Please check the props passed to <span>FeedbackList</span> inside the
				root component <span>App</span>.
			</p>
		)
	}

	return isLoading ? (
		<Spinner />
	) : (
		<StyledFeedbackList>
			<AnimatePresence>
				{feedbacks.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<FeedbackItem key={item.id} item={item} />
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
