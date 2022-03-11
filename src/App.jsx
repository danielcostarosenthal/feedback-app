import PropTypes from 'prop-types'
import { Resets } from './components/styles/Resets.styled'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'

const App = () => {
	return (
		<>
			<Resets />
			<Container>
				<Header />
			</Container>
		</>
	)
}

// Header Typechecking PropTypes
Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default App
