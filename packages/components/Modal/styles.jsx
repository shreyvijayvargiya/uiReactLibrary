import styled from 'styled-components';

export const Container = styled.div`
	width:100%;
	height: 100%;
`;

export const ModalContainer = styled.div`
	width: fit-content;
	height: 100%;
	overflow: scroll;
	border: 1px solid ${props => props.theme.background};
	overflow: auto;
	box-shadow: 20px 20px 4px ${props => props.theme.background};
	margin: 20% auto;
	border-radius: 8px;
	position: relative;
	z-index: 1;
	padding: 10px;

	.closeButton {
		position: absolute;
		right: 10px;
		top: 10px;
		
	};
	@media screen and (max-width: 600px) {
		border: none;
		box-shadow: none;
		background: ${props => props.theme.default};
		.closeButton {
			right: 20px;
		}
		margin: 50% auto;
	}
`