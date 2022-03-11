import PropTypes from 'prop-types'
import { StyledHeader } from './styles/Header.styled'

const Header = (props) => {
	return (
		<StyledHeader>
			<h2>{props.title}</h2>
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
