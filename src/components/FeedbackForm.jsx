import { useState, useEffect } from 'react'
import { StyledFeedbackForm } from './styles/FeedbackForm.styled'
import { useContext } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
	const [text, textSet] = useState('')
	const [rating, ratingSet] = useState(10)
	const [isDisabled, isDisabledSet] = useState(true)
	const [message, messageSet] = useState('')
	const { feedbacksEdit, addFeedback, updateFeedback } =
		useContext(FeedbackContext)

	useEffect(() => {
		if (feedbacksEdit.edit) {
			isDisabledSet(false)
			textSet(feedbacksEdit.item.text)
			ratingSet(feedbacksEdit.item.rating)
		}
	}, [feedbacksEdit])

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
			if (feedbacksEdit.edit) {
				updateFeedback(feedbacksEdit.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}
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
