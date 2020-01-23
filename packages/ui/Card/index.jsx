import React from 'react';
import { Container, Header, Body, Footer, Children } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Card = ({ header, body, footer, width, children, themeType, headerFooterThemeType }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container width={width} themeType={themeType} borderRequired={children ? false: true}>
				{header ? <Header headerFooterThemeType={headerFooterThemeType}>{header}</Header>: null}
				{body ? <Body>{body}</Body>: null}
				{footer ? <Footer headerFooterThemeType={headerFooterThemeType}>{footer}</Footer>: null}
				{children ? <Children themeType={themeType}>{children}</Children>: null}
			</Container>
		</ThemeProvider>
	)
};

export default Card;
