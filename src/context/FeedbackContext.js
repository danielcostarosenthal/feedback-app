import { createContext, useEffect, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, isLoadingSet] = useState(true)
	const [feedbacks, feedbacksSet] = useState([])
	const [feedbacksEdit, feedbacksEditSet] = useState({
		feedback: {},
		edit: false,
	})

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	const fetchFeedbacks = async () => {
		// Params: ?_sort=id&_order=desc => To sort by ID and descending
		const response = await fetch('http://localhost:5000/feedbacks')
		const data = await response.json()

		// Added a delay to better see the spinner
		setTimeout(() => {
			feedbacksSet(data)
			isLoadingSet(false)
		}, 250)
	}

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
				isLoading,
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
