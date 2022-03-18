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

	// Loading the feedbacks thru a GET request
	const fetchFeedbacks = async () => {
		// Params: ?_sort=id&_order=desc => So that last feedback appear first
		const response = await fetch('/feedbacks?_sort=id&_order=desc')
		const data = await response.json()

		// Added a delay to better see the spinner
		setTimeout(() => {
			feedbacksSet(data)
			isLoadingSet(false)
		}, 250)
	}

	// Adding feedback thru a POST request
	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedbacks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})

		const data = await response.json()

		// The server automatically assigns an ID
		//newFeedback.id = Math.floor(Date.now() * Math.random())
		feedbacksSet([data, ...feedbacks])
	}

	// Deleting feedback thru a DELETE request
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			await fetch(`/feedbacks/${id}`, {
				method: 'DELETE',
			})
			feedbacksSet(feedbacks.filter((feedback) => feedback.id !== id))
		}
	}

	// Adding the edit key to the feedback signaling it can be edited
	const editFeedback = (feedback) => {
		feedbacksEditSet({
			feedback,
			edit: true,
		})
	}

	// Updating feedback thru a PUT request
	const updateFeedback = async (id, updatedFeedback) => {
		const response = await fetch(`/feedbacks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedFeedback),
		})

		const data = await response.json()
		feedbacksSet(
			feedbacks.map((feedback) =>
				feedback.id === id ? { ...feedback, ...data } : feedback
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
