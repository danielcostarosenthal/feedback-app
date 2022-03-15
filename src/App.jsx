import { useState } from 'react'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
	const [feedbacks, feedbackSet] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbackSet(feedbacks.filter((item) => item.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = Math.floor(Date.now() * Math.random())
		feedbackSet([newFeedback, ...feedbacks])
	}

	return (
		<>
			<Resets />
			<Header />
			<Container>
				<FeedbackForm handleAddFeedback={addFeedback} />
				<FeedbackStats feedbacks={feedbacks} />
				<FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
			</Container>
		</>
	)
}

export default App
