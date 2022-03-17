import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, feedbacksSet] = useState([
		{
			id: 1,
			text: 'This item is from the Context API',
			rating: 10,
		},
	])
	return (
		<FeedbackContext.Provider value={{ feedbacks: feedbacks }}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
