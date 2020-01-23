import React from 'react';
import { Container } from './styles';
import{ ThemeProvider } from 'styled-components';
import{ theme } from '../../theme/theme';

const Radio =  ( { label, height }) => {
return (
	<ThemeProvider theme={theme}>
		<Container height={height}>
			{label ? <p>{label}</p>: null}
			<input type="radio"  />
			<span className="checkmark"></span>
		</Container>
	</ThemeProvider>
  )
}
export default Radio ;
