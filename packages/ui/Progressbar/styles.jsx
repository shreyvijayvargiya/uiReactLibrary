import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: ${props => props.width ? props.width:  'fit-content'};
	height: ${ props => props.height ? props.height : 'fit-content'};
	border-radius: ${props=> props.rounded ? "10px": null };
	border: 1px solid ${props => props.theme.border};
	
`;
export const Bar = styled.div`
	${( { props } ) => {
		if(props.barWidth > 0){
			return css`
				width: ${props => props.barWidth}px;
				height: 20px;
				opacaity: 1;
			`
		}
		else {
			return css `
				width: 0px;
				height: 20px;
				opacity: 0;
			`
		}
	}}
	border-radius: ${props=> props.rounded ? "10px": null };
	border: 1px solid ${props => props.theme.border};
	background: ${props => props.themeType ? props.theme[props.themeType] : props.theme.background};
`;
