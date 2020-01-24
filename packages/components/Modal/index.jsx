import React from 'react';
import { Container, ModalContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ( { children , show , setShow }) => {
	return (
		<ThemeProvider theme={ theme }>
			<Container show={show}>
				{show ? (
				<ModalContainer>
					<div className="closeButton" onClick={() => setShow(false)}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
					<br />
					<div >
						{children}
					</div>
				</ModalContainer>
				)
				: null }
			</Container>
		</ThemeProvider>
	 )
}
export default Modal ;
