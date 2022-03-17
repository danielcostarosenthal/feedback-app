import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
	return (
		<FeedbackProvider>
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
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}></Route>
						<Route path='/about' element={<About />} />
					</Routes>
					<AboutLink />
				</Container>
			</BrowserRouter>
		</FeedbackProvider>
	)
}

export default App
