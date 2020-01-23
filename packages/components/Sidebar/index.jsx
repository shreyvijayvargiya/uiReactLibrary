import React,{ useState } from 'react';
import { Container,SidebarContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ( { children, width, themeType, title, height }) => {
	
	const [sidebarWidth, setSidebarWidth] = useState(0);	
	
	return (
		<ThemeProvider theme={ theme }>	
			<Container themeType={themeType} >
				<div className="toggleButton" onClick={() => setSidebarWidth(width)}>
					<FontAwesomeIcon icon={faBars} />{title}
				</div>
				<SidebarContainer sidebarWidth={sidebarWidth} themeType={themeType} height={height}>
					<div onClick={() => setSidebarWidth(0)} className="closeButton">
						<FontAwesomeIcon icon={ faTimes } />
					</div>
					<br /><br />
					{children}
				</SidebarContainer>
			</Container>
		</ThemeProvider>
	  )
}
export default Sidebar ;
