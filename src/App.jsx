import { useState } from 'react'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

const App = () => {
	const [feedback, feedbackSet] = useState(FeedbackData)
	const [isPassed, isPassedSet] = useState(true)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbackSet(feedback.filter((item) => item.id !== id))
		}
	}

	return (
		<>
			<Resets />
			<Header />
			<Container>
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</Container>
		</>
	)
}

export default App
