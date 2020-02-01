import React, { useState } from 'react';
import { Container, Bar } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Progressbar = ( { width, themeType, rounded, handleBar } ) => {
	const [barWidth, setBarWidth]  = useState(0);
	
	return (
		<ThemeProvider theme={ theme }>
			<Container width={width} rounded={rounded} themeType={themeType}>
				<Bar barWidth={barWidth} themeType={themeType} ></Bar>
			</Container>
		</ThemeProvider>
	);
};
export default Progressbar ;
