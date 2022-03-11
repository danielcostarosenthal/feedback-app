import PropTypes from 'prop-types'
import { StyledCard } from '../styles/Card.styled'

const Card = ({ children }) => {
	const handleClick = (item) => {
		console.log(`Rating: ${item.rating}`)
		console.log(`Text: ${item.text}`)
		console.log(`ID: ${item.id}`)
	}

	return <StyledCard>{children}</StyledCard>
}

// Card Default Props
Card.defaultProps = {
	item: {
		rating: 0,
		text: 'The feedback text is missing. Please reload application or try later.',
		id: 1,
	},
}

// Card Typechecking PropTypes
Card.propTypes = {
	item: PropTypes.object.isRequired,
}

export default Card
