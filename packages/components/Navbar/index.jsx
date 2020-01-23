import React, { useState } from 'react';
import { Container, Heading, Children } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes , faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = ( { heading, children, themeType }) => {
	const [show, setShow] = useState(false);
	console.log(show);
	return (
		<ThemeProvider theme={theme}>
			<Container  themeType={themeType}>
				<Heading>{heading}</Heading>
				<Children>
					{children}
				</Children>
				<div className="navIcon" onClick={() => setShow( !show )}>
					<FontAwesomeIcon icon={ show ? faTimes : faBars } />
					<br />
				</div>
				{ show ? (
					<div className="responsiveChildren">
						{children}
					</div>
				) : null}
			</Container>
		</ThemeProvider>
	  )
	}
export default Navbar ;
