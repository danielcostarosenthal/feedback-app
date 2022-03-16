import { useState } from 'react'
import { StyledFeedbackForm } from './styles/FeedbackForm.styled'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({ handleAddFeedback }) => {
	const [text, textSet] = useState('')
	const [rating, ratingSet] = useState(10)
	const [isDisabled, isDisabledSet] = useState(true)
	const [message, messageSet] = useState('')

	const handleTextChange = (e) => {
		if (text === '') {
			isDisabledSet(true)
			messageSet(null)
		} else if (text !== '' && text.trim().length <= 10) {
			isDisabledSet(true)
			messageSet('Text must be at least 10 characters long')
		} else {
			messageSet(null)
			isDisabledSet(false)
		}
		textSet(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (text.trim().length > 10) {
			const newFeedback = {
				text: text,
				rating: rating,
			}
			handleAddFeedback(newFeedback)
			textSet('')
		}
	}

	return (
		<Card>
			<StyledFeedbackForm onSubmit={handleSubmit}>
				<h2>Please rate our services</h2>
				<RatingSelect
					select={(rating) => {
						ratingSet(rating)
					}}
				/>
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write your review'
						value={text}
					/>
					<Button type='submit' version='primary' isDisabled={isDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</StyledFeedbackForm>
		</Card>
	)
}

export default FeedbackForm
