import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme'

const Box = ({ background, border, width, children, height }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container border={border} background={background} width={width} height={height}>
				<div className="children">{children}</div>
			</Container>
		</ThemeProvider>
  	)
}
export default Box;
