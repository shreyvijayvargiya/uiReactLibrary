import React from 'react';
import { Container } from './styles';
import { Navbar } from '../../packages/components';
import { Box } from '../../packages/ui';

const DemoNavbar = () => {
	return (
		<Container>
			<Navbar themeType="default" heading="Heading">
				<p>About</p>
				<p>Gallery</p>
				<p>Blog</p>
				<p>Profile</p>
			</Navbar>
			<br /> <br />
			<Box width="80%" border="primary">
				<Navbar themeType="primary" heading="Heading">
					<p>About</p>
					<p>Gallery</p>
					<p>Blog</p>
					<p>Profile</p>
				</Navbar>
			</Box>
		</Container>
	 )
}
export default DemoNavbar ;
