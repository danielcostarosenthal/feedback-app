import { createContext, useEffect, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, feedbacksSet] = useState(FeedbackData)
	const [feedbacksEdit, feedbacksEditSet] = useState({
		feedback: {},
		edit: false,
	})

	const addFeedback = (newFeedback) => {
		newFeedback.id = Math.floor(Date.now() * Math.random())
		feedbacksSet([newFeedback, ...feedbacks])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbacksSet(feedbacks.filter((feedback) => feedback.id !== id))
		}
	}

	const editFeedback = (feedback) => {
		feedbacksEditSet({
			feedback,
			edit: true,
		})
	}

	const updateFeedback = (id, updatedItem) => {
		feedbacksSet(
			feedbacks.map((feedback) =>
				feedback.id === id ? { ...feedback, ...updatedItem } : feedback
			)
		)

		feedbacksEditSet({
			feedback: {},
			edit: false,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				feedbacksEdit,
				addFeedback,
				deleteFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
