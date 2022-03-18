import spinner from '../assets/spinner.gif'

const Spinner = () => {
	return (
		<img
			src={spinner}
			alt='Loading...'
			style={{
				width: '150px',
				margin: 'auto',
				display: 'block',
				borderRadius: '5px',
			}}
		/>
	)
}

export default Spinner
