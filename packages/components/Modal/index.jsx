import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ( { children , show , setShow }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container show={show}>
				{show ? (
				<div className="modalContainer">
					<div className="closeButton" onClick={() => setShow(false)}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
					<div >
						{children}
					</div>
				</div>
				)
				: null }
			</Container>
		</ThemeProvider>
	 )
}
export default Modal ;
