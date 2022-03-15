import { useState } from 'react'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

const App = () => {
	const [feedbacks, feedbackSet] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			feedbackSet(feedbacks.filter((item) => item.id !== id))
		}
	}

	return (
		<>
			<Resets />
			<Header />
			<Container>
				<FeedbackStats feedbacks={feedbacks} />
				<FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
			</Container>
		</>
	)
}

export default App
