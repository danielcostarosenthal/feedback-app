import PropTypes from 'prop-types'
import { StyledHeader } from './styles/Header.styled'
import logo from '../img/icons.png'

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<img src={logo} alt='Icon Image' />
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
