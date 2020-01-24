import React from 'react';
import { Container } from './styles'; 
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Avatar = ({ children, themeType }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container themeType={themeType}>
				<div>{children}</div>
			</Container>
		</ThemeProvider>
	);
};
export default Avatar;
