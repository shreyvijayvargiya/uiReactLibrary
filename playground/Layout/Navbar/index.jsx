import React from 'react';
import { Container } from './styles';
import { Navbar } from '../../../packages/components';
import { Box,Button, Dropdown } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const theme = [ 'primary', 'secondary', 'error', 'default', 'warning'];
const scope ={ Box, Container, Button, Dropdown, theme,Navbar };

const codeOne = `
	<Box width="100%" border="black">
		<h3>Navbar with same themeType Buttons </h3>
		{theme.map(item => (
			<Navbar themeType={item} heading="Heading">
				<Button themeType={item}>About</Button>
				<Button themeType={item}>Gallery</Button>
				<Button themeType={item}>Profile</Button>
			</Navbar>
		))}
	</Box>
`;
const codeTwo = `
	<Box width="100%" border="black">
		<h3>Navbar with Black Buttons </h3>
		{theme.map(item => (
			<Navbar themeType={item} heading="Heading">
				<Button themeType="black">About</Button>
				<Button themeType="black">Gallery</Button>
				<Button themeType="black">Profile</Button>
			</Navbar>
		))}
	</Box>
`;
const codeThree = `
	<Box width="100%" border="black">
		<h3>Navbar with same themeType Buttons </h3>
		{theme.map(item => (
			<Navbar themeType={item} heading="Heading">
				<Dropdown header="Profile" themeType={item}>
					 <p>Name</p>
					 <p>Orders</p>
					 <Button themeType={item}>Logout</Button>
				</Dropdown>
			</Navbar>
		))}
	</Box>
`;
const DemoNavbar = () => {
	const codeItem = [codeOne, codeTwo, codeThree];
	return (
		<div>
			{codeItem.map(item => (
				<Box border="black" width="100%">
					<LiveProvider code={item} scope={scope}>
						<LivePreview />
						<LiveEditor />
						<LiveError />
					</LiveProvider>
				</Box>
			))}
		</div>
	 )
}
export default DemoNavbar ;
