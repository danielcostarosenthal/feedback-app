import { useState } from 'react'
import Card from './shared/Card'
import { StyledFeedbackForm } from './styles/FeedbackForm.styled'
import Button from './shared/Button'

const FeedbackForm = () => {
	const [text, textSet] = useState('')

	const handleTextChange = (e) => {
		textSet(e.target.value)
	}

	return (
		<Card>
			<StyledFeedbackForm>
				<h2>Please rate our service</h2>
				{/* TODO */}
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write your review'
						value={text}
					/>
					{text.length >= 10 && (
						<Button type='submit' version='primary'>
							Send
						</Button>
					)}
				</div>
			</StyledFeedbackForm>
		</Card>
	)
}

export default FeedbackForm
