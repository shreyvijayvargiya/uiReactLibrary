import React from 'react';
import { Container } from './styles';
import { Navbar } from '../../packages/components';

const DemoNavbar = () => {
	return (
		<Container>
			<Navbar themeType="primary" heading="Heading">
				<p>About</p>
				<p>Gallery</p>
				<p>Blog</p>
				<p>Profile</p>
			</Navbar>
		</Container>
	 )
}
export default DemoNavbar ;
