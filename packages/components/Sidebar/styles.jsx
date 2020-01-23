import styled from 'styled-components';

export const Container = styled.div`
	margin: auto;
	position: relative;
	.toggleButton {
		font-size: 24px;
		font-weight: bold;	
	}
	.closeButton {
		position: absolute;
		right: 10px;
		top: 5px;
	}

`;

export const SidebarContainer = styled.div`
	width: ${(props) =>props.sidebarWidth === 0 ?  0: props.sidebarWidth }px;
	height: ${props => props.height};
	margin: 4px;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: -10px;
	z-index: 1;
	transition: 0.5s;
	background: ${props => props.theme[props.themeType]};
	z-index: 1;
	& > * {
		padding: 10px;
	}
`;