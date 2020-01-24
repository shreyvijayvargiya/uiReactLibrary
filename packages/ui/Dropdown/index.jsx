import React, { useState } from 'react';
import { Container, Header, Children } from './styles';
import { theme } from '../../theme/theme';
import { ThemeProvider } from 'styled-components';

const Dropdown = ( { header , children }) => {
	const [show, setShow ] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<Container header={header} onClick={() => setShow(!show)}>
				<Header>{header}</Header>
				{show ? 
				(
					<Children>
						{children}	
					</Children>
				): null}
			</Container>
		</ThemeProvider>
	);
};
export default Dropdown ;
