import React from 'react';
import { Container, Heading, Children } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons

const Navbar = ( { heading, children, themeType }) => {
	return (
		<ThemeProvider theme={theme}>
			<Container  themeType={themeType}>
				<Heading>{heading}</Heading>
				<Children>
					{children}
				</Children>
				<div className="icon">
					<FontAwesomeIcon icon={faCoffee} />
				</div>
			</Container>
		</ThemeProvider>
	  )
	}
export default Navbar ;
