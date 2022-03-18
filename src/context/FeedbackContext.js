import { createContext, useEffect, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, feedbacksSet] = useState(FeedbackData)
	const [feedbacksEdit, feedbacksEditSet] = useState({
		item: {},
		edit: false,
	})

	const addFeedback = (newFeedback) => {
		newFeedback.id = Math.floor(Date.now() * Math.random())
		feedbacksSet([newFeedback, ...feedbacks])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbacksSet(feedbacks.filter((item) => item.id !== id))
		}
	}

	const editFeedback = (item) => {
		feedbacksEditSet({
			item,
			edit: true,
		})
	}

	const updateFeedback = (id, updatedItem) => {
		feedbacksSet(
			feedbacks.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		)
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
