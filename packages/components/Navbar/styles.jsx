import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: ${props => props.theme[props.themeType]};
	width: 100%;
	height: 100px;
	border: 1.2px solid ${props => props.theme.background};
	position: relative;
	.navIcon {
		display: none;
		padding: 0px 20px;
		margin: auto 0px;	
	};
	@media screen and (max-width: 600px){
		.navIcon {
			display: block;
			position: fixed;
			right: 4px;
			top: 30px;
			bottom: 30px;
		}
		
		margin: 0px;
		height: 60px;
	};
	.responsiveChildren {
		border: 2px solid ${props => props.theme.heading};
		position: fixed;
		background: ${props => props.themeType ? props.theme[props.themeType]: props.theme.background};
		top: 50px;
		right: 10px;
		padding: 10px;
		z-index: 10;
		box-shadow: 10px 20px 4px ${props => props.theme.background};
	}
`;

export const Heading = styled.div`;
	padding: 20px;
	width: 50%;
	font-weight: bold;
	font-family: ${props => props.theme.heading};
	font-size: ${props => props.theme.fs4};
	text-align: left;
	@media screen and (max-width: 600px) {
		font-size: ${props => props.theme.fs1};
	}
`;

export const Children = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 50%;
	flex-direction: row;
	font-size: ${props => props.theme.fs2};
	
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		display: none;
	};
`