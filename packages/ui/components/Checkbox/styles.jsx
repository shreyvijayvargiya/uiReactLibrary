import styled from 'styled-components'

export const Container = styled.div``;

export const CheckboxContainer = styled.input`
	width: ${props => props.width};
	height: ${props => props.height ? props.height: null};
	padding: 2px;
	outline: none;
	z-index: -1;
	border: 0;
`;
export const Box = styled.div`
	border: ${(props) => `1px solid ${props.theme[props.themeType]}`};
	width: ${props => props.width};
	height: ${props => props.height ? props.height: null};
	z-index: 1;
	input[type = 'checkbox'] {
		border: 0;
		width: 100%;
	}
`;
