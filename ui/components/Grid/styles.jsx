import styled from 'styled-components';

export const Container = styled.div `
	width: 100%;
	height: 100%;
	margin: 4px;
	padding: 4px;
	display: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return `${breakArray[0]}`;
	}};
	justify-content: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return breakArray[1];
	}};
	align-items: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return breakArray[2];
	}};
`;
