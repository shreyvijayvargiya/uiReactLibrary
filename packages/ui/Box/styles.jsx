import styled from 'styled-components';

export const Container = styled.div`
	width: ${props => props.width ? props.width : "fit-content" };
	height: ${props => props.height ? props.height : "fit-content"};
	text-align: center;
	.children{
		margin: 10px auto;
		padding: 20px;
	};
	border: ${props =>props.border ? `1px solid ${props.theme[props.border]}`: null };
	background: ${props => props.background ? `${props.theme[props.background]}`: null};
`;