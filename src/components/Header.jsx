import PropTypes from 'prop-types'
import { StyledHeader } from './styles/Header.styled'

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<h2>{title}</h2>
		</StyledHeader>
	)
}

// Header Default Props
Header.defaultProps = {
	title: 'Feedback React App',
}

// Header Typechecking PropTypes
Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
