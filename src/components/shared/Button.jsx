import PropTypes from 'prop-types'
import { StyledButton } from '../styles/Button.styled'

const Button = ({ children, type, isDisabled, version, onClick }) => {
	return (
		<StyledButton
			type={type}
			disabled={isDisabled}
			className={`btn btn-${version}`}
			version={version}
			onClick={onClick}
			onSubmit={onClick}>
			{children}
		</StyledButton>
	)
}

// Button Default Props
Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false,
}

// Button Typechecking PropTypes
Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
}

export default Button
