import { Card } from './styles/Card.styled'
import { useState } from 'react'

const FeedbackItem = (props) => {
	const [rating, ratingSet] = useState(10)

	const handleClick = (item) => {
		// We can access the previous value of the state
		ratingSet((previous) => {
			return previous + 1
		})

		console.log(`Rating: ${item.rating}`)
		console.log(`Text: ${item.text}`)
		console.log(`ID: ${item.id}`)
	}

	return (
		<Card>
			<div className='card-rating'>{props.item.rating}</div>
			<div className='card-text'>{props.item.text}</div>
			<button
				onClick={() => {
					handleClick(props.item)
				}}>
				Click
			</button>
		</Card>
	)
}

export default FeedbackItem
