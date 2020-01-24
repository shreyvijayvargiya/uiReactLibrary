import styled from 'styled-components';

export const Container = styled.div`
	width: fit-content;
	height: fit-content;
	
`;


export const Header = styled.div`
	background: ${props => props.theme.background};
	padding: 8px;
	width: fit-content;
`;


export const Children = styled.div`
	border: 1px solid ${props => props.theme.border};
	padding: 4px;
	margin:  1px auto;
	max-width: 100px;
	width: fit-content;
	height: fit-content;
	box-shadow: 10px 10px 4px ${props => props.theme.background};
	z-index: 10;
	background: ${props => props.theme.background};
`;