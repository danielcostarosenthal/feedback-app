import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'

const App = () => {
	const [feedback, feedbackSet] = useState(FeedbackData)

	return (
		<>
			<Resets />
			<Header />
			<Container>
				<FeedbackList feedback={feedback} />
			</Container>
		</>
	)
}

export default App
