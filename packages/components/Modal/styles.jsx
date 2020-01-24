import styled from 'styled-components';

export const Container = styled.div`
	box-shadow: 20px 20px 4px ${props => props.theme.background};
	border-radius: 8px;
	width: fit-content;
	overflow: auto;
	margin: auto;
	padding: 10px;
	z-index: 10;
	border: 1px solid ${props => props.theme.background};
	.closeButton {
		position: absolute;
		right: 10px;
		top: 10px;
	};
	@media screen and (max-width: 600px) {
		width: 100%;
		height: 100%;
		margin: 0px;
		border: none;
		box-shadow: 0;
		background: ${props => props.theme.default};
	}
`;