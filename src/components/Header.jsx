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

export default Header
