import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';

const Button = ( { children, width, height, buttonType, onClick, themeType  } ) => {
return ( 
	<ThemeProvider theme={theme}>
		<Container onClick={onClick} width={width} height={height} buttonType={buttonType} themeType={themeType}>
			{ children }
		</Container>
	</ThemeProvider>
  );
};
export default Button ;
