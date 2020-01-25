import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.p`
	font-size: ${props => props.theme[props.size]};
`;