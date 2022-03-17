import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	console.log(FeedbackData)

	const [feedbacks, feedbacksSet] = useState(FeedbackData)

	const addFeedback = (newFeedback) => {
		newFeedback.id = Math.floor(Date.now() * Math.random())
		feedbacksSet([newFeedback, ...feedbacks])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbacksSet(feedbacks.filter((item) => item.id !== id))
		}
	}

	return (
		<FeedbackContext.Provider
			value={{ feedbacks: feedbacks, deleteFeedback, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
