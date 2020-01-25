import styled from 'styled-components';

export const Container = styled.div`
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	background: ${props => props.themeType ? props.theme[props.themeType]: props.theme.background};
`;


export const Header = styled.div`
	background: ${props => props.themeType ? props.theme[props.themeType]: props.theme.background};
	padding: 8px;
	width: fit-content;
`;


export const Children = styled.div`
	border: 1px solid ${props => props.theme[props.themeType]};
	padding: 4px;
	margin:  1px auto;
	max-width: 100px;
	width: fit-content;
	height: fit-content;
	overflow: auto;
	position: absolute;
	z-index: 10;
	background: ${props => props.themeType ? props.theme[props.themeType]: props.theme.background};
`;