import styled from 'styled-components';

export const Container = styled.div `
	width: 100%;
	height: 100%;

	padding: 4px;
	&  * > {
		margin: 0px 2px;
	} 
	display: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return `${breakArray[0]}`;
	}};
	flex-direction: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return breakArray[1];
	}};
	justify-content: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return breakArray[2];
	}};
	align-items: ${( props ) => {
		const breakArray = props.layout.split(" ");
		return breakArray[3];
	}};
	&  > * {
		margin: 4px;
	}
`;
