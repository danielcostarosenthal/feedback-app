import PropTypes from 'prop-types'
import { StyledCard } from '../styles/Card.styled'

const Card = ({ children, reverse }) => {
	return <StyledCard reverse={reverse}>{children}</StyledCard>
}

// Card Default Props
Card.defaultProps = {
	reverse: false,
}

// Card Typechecking PropTypes
Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool.isRequired,
}

export default Card
