import { FcAbout } from 'react-icons/fc'
import { StyledAboutLink } from './styles/AboutLink.styled'
import { Link, useLocation } from 'react-router-dom'

const AboutLink = () => {
	const location = useLocation()

	return (
		<>
			{location.pathname !== '/about' ? (
				<StyledAboutLink>
					<Link to='/about'>
						<FcAbout />
					</Link>
				</StyledAboutLink>
			) : null}
		</>
	)
}

export default AboutLink
