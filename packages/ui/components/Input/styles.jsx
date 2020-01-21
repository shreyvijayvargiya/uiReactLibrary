import styled from 'styled-components';

export const InputContainer = styled.input`
	width: ${props => props.width};
	height: ${props => props.height ? props.height: null};
	border: ${(props) => {
		if(props.inputType === 'dotted'){
			return `1px dotted ${props.theme[props.themeType]}`;
		}
		if(props.inputType === 'underline'){
			return `none`;
		}
		return `1px solid ${props.theme[props.themeType]}`;
	}};
	border-bottom: ${(props) => {
		if(props.inputType === 'underline'){
			return `1.2px solid ${props.theme[props.themeType]}`
		}
	}};
	padding: 2px;
	outline: none;
	&:focus {
		opacity: 1;
	}
	opacity: 0.7;
`;