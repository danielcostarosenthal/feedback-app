import styled from 'styled-components'

export const StyledCard = styled.li`
	width: 100%;
	max-width: 475px;
	margin: 30px auto;
	padding: 40px 20px;
	position: relative;

	background-color: ${(props) =>
		props.reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff'};
	border-radius: 5px;
	line-height: 1.5;
	list-style: none;

	.card-rating {
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 30px;
		transform: translate(-50%, -50%);

		background-color: #b14e84;
		border-radius: 50%;
		color: #fff;
		font-weight: bold;
		font-size: 1.25rem;
		line-height: 30px;
		text-align: center;
		user-select: none;
	}

	.card-delete,
	.card-edit {
		width: 0px;
		height: 0px;
		position: absolute;
		top: 20px;
		right: 20px;

		background-color: none;
		border: none;
		outline: none;
	}

	.card-edit {
		right: 50px;
	}

	.card-delete > svg,
	.card-edit > svg {
		transform: translate(-50%, -50%);

		color: ${(props) => (props.color ? props.color : 'crimson')};
		cursor: pointer;
		font-size: 1.25rem;
	}

	.card-delete > svg:active,
	.card-edit > svg:active {
		font-size: 1.1rem;
	}

	.card-text {
		padding: 0 30px;

		color: ${(props) => (props.reverse ? '#fff' : '#333')};
		font-style: italic;
		word-wrap: break-word;
	}

	/* This class is not used */
	.card-btn {
		width: 100%;
		margin: 30px auto 0 auto;
		padding: 10px 20px;
		display: block;

		background-color: #b14e84;
		border: 0;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
		font-size: inherit;
		outline: none;
		text-align: center;
	}

	.card-btn:active {
		transform: scale(0.98);
	}

	.about-page > .title {
		margin-bottom: 50px;

		text-align: center;
	}

	.about-page > .version {
		margin: 10px 0;

		font-style: italic;
		font-weight: bold;
	}

	.about-page > .back-to-home > a {
		margin-top: 30px;
		display: block;
		padding: 10px;

		background-color: #b14e84;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	.about-page > .back-to-home > a:active {
		transform: scale(0.98);
	}

	.about-page > .back-to-home > a:hover {
		opacity: 0.9;
	}

	.about-page > .description {
		margin: 20px 0;
	}

	.handle-click {
		color: #b14e84;
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
	}
`
