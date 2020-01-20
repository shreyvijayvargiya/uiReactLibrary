import styled from 'styled-components';

export const Container = styled.div`
	box-shadow: 20px 20px 4px ${props => props.theme.background};
	z-index: 10;
	width: ${props => props.width ? (props.width): null}%;
	word-wrap: break-word;
	height: 100%;
	border-radius: 8px;
	margin: auto;
	text-align: center;
	div{
		padding: 8px;
	}
`;

export const Header = styled.div`
	background: ${props => props.headerFooterThemeType === null ? props.theme.headerBackground: props.theme[props.headerFooterThemeType]};
	border-bottom: 1px solid ${props => props.theme.background};
	font-size: 18px;
`;

export const Body = styled.div`
	font-size: 14px;
	margin: 4px 0px;
	background: ${props => props.theme[props.background]};
`;

export const Footer = styled.div`
	font-size: 14px;	
	position: relative;
	bottom: 0px;
	right: 0px;
	left: 0px;
	background: ${props => props.headerFooterThemeType === null ? props.theme.headerBackground: props.theme[props.headerFooterThemeType]};
	border-top: 1px solid ${props => props.theme.background};
`;
export const Children = styled.div`
	margin: auto;
	border-radius: 4px;
	background: ${props=> props.theme[props.themeType] }
`;
