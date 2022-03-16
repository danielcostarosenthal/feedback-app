import Card from '../components/shared/Card'

const About = () => {
	return (
		<Card>
			<div>
				<h2>About My Project</h2>
				<p>
					This is a React Application for testing purposes. It shows how you can
					build an app to leave feedback for a service or product.
				</p>
				<p>Version: 1.0.0</p>
				<div>
					<a href='/'>Back To Home</a>
				</div>
			</div>
		</Card>
	)
}

export default About
