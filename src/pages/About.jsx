import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const About = () => {
	return (
		<Card>
			<div className='about-page'>
				<h2 className='title'>About My Project</h2>
				<p className='description'>
					This is a React Application for testing purposes. It shows how you can
					build an app to leave feedback for a service or product.
				</p>
				<p className='version'>Version: 1.0.0</p>
				<div className='back-to-home'>
					<Link to='/'>Back To Home</Link>
				</div>
			</div>
		</Card>
	)
}

export default About
