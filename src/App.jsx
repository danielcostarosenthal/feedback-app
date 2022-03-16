import { useState } from 'react'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'

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
		<BrowserRouter>
			<Resets />
			<Header />
			<Container>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAddFeedback={addFeedback} />
								<FeedbackStats feedbacks={feedbacks} />
								<FeedbackList
									feedbacks={feedbacks}
									handleDelete={deleteFeedback}
								/>
							</>
						}></Route>
					<Route path='/about' element={<About />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}

export default App
