import styled from 'styled-components';

export const Container = styled.div`;
	display: flex;
	align-items: center;
	p{
		font-size: ${props => props.height};
	}
	input {
		width: 10%;
		border: 0;
		height: ${props => props.height};
	}
	input: checked ~ .checkmark{
		height: ${props => props.height};
		width: ${props => props.height};
		border: 1px solid black;
	}
	
	&:hover input{
		background:${props=> props.theme.primary};
	}
`;