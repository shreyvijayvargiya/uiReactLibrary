import styled from 'styled-components';

export const Container = styled.div`
	width: ${props => props.width ? props.width : "100%" };
	height: ${props => props.height ? props.height : null};
	margin: 2px;
	padding: 4px;
	text-align: center;
	border: ${props =>props.border ? `1px solid ${props.theme[props.border]}`: null };
	background: ${props => props.background ? `${props.theme[props.background]}`: null};
`;