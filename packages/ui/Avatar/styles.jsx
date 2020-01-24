import styled from 'styled-components';

export const Container = styled.div`
	
	border-radius: 60%;
	width: fit-content;
	height: fit-content;
	font-weight: bold;
	background: ${props => props.theme[props.themeType]};
	border: 1px solid ${props => props.theme.background};
	div {
		margin: auto;
		padding: 10px;
		vertical-align: middle;
	}
`;