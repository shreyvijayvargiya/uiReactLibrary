import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme'

const Box = ({ background, border, width, children }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container border={border} background={background} width={width} >
				<div>{children}</div>
			</Container>
		</ThemeProvider>
  	)
}
export default Box;
