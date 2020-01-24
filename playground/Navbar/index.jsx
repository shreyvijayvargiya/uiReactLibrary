import React from 'react';
import { Container } from './styles';
import { Navbar } from '../../packages/components';
import { Box,Button } from '../../packages/ui';

const DemoNavbar = () => {
	const theme = [ 'primary' , 'secondary', 'warning', 'error', 'black'];
	return (
		<Container>
			<Box width="100%">
				<h3>Navbar with Black Buttons </h3>
				{theme.map(item => (
					<Navbar themeType={item} heading="Heading">
						<Button themeType="black">About</Button>
						<Button themeType="black">Gallery</Button>
						<Button themeType="black">Profile</Button>
					</Navbar>
				))}
			</Box>
			<br /> <br />
			<Box width="100%">
				<h3>Navbar with same themeType Buttons </h3>
				{theme.map(item => (
					<Navbar themeType={item} heading="Heading">
						<Button themeType={item}>About</Button>
						<Button themeType={item}>Gallery</Button>
						<Button themeType={item}>Profile</Button>
					</Navbar>
				))}
			</Box>
		</Container>
	 )
}
export default DemoNavbar ;
