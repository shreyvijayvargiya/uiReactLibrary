import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: ${props => props.theme[props.themeType]};
	width: 100%;
	height: 100px;
	border: 1.2px solid ${props => props.theme.background};
	&.icon { 
		display: none;
	}
	@media screens and (max-width: 600px){
		&.icon {
			display: block;
		}
	}
`;

export const Heading = styled.div`;
	padding: 20px;
	width: 50%;
	font-weight: bold;
	font-family: ${props => props.theme.heading};
	font-size: ${props => props.theme.fs4};
`;

export const Children = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 50%;
	font-size: ${props => props.theme.fs2};
	@media screens and (max-width: 600px){
		flex-direction: column;
	}
`