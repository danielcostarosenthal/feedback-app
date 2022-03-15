import { useState } from 'react'
import Card from './shared/Card'
import { StyledFeedbackForm } from './styles/FeedbackForm.styled'
import Button from './shared/Button'

const FeedbackForm = () => {
	const [text, textSet] = useState('')

	const handleTextChange = (e) => {
		textSet(e.target.value)
	}

	const handleClick = (e) => {
		textSet('')
		document.querySelector('input').focus()
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
					<Button
						type='submit'
						version='primary'
						onClick={handleClick}
						onSubmit={handleClick}
						isDisabled={text.length < 9 ? true : false}>
						Send
					</Button>
				</div>
			</StyledFeedbackForm>
		</Card>
	)
}

export default FeedbackForm
