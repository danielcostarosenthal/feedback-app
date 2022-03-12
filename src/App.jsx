import { useState } from 'react'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

const App = () => {
	const [feedback, feedbackSet] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		console.log(id)
		feedbackSet(feedback.filter((item) => item.id !== id))
	}

	return (
		<>
			<Resets />
			<Header />
			<Container>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</Container>
		</>
	)
}

export default App
