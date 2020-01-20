import styled from 'styled-components';

export const Container = styled.div`
	width: fit-content;
	margin: 2px;
	padding: 4px;
	color: ${(props) =>{
		if(props.buttonType === 'link'){
			return `${props.theme[props.themeType]}`;
		}
		return'white';
	}};
	box-shadow: 10px 10px 4px ${props => props.theme.background};
	border-radius: 4px;
	background: ${(props) => {
		if(props.buttonType === 'link'){
			return `${props.theme.headerBackground}`;
		}
		return `${props.theme[props.themeType]}`;
	}};
	border: ${(props) => {
		if(props.buttonType === 'link'){
			return `1px solid ${props.theme[props.themeType]}`;
		}
		return 'none';
	}};
	&:hover {
		font-weight: bold;
	};
`;