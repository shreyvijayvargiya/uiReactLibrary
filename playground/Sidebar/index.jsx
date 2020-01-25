import React from 'react';
import { Sidebar } from '../../packages/components';
import { Container } from './styles';
import { Box, Grid } from '../../packages/ui';

const DemoSidebar = () => {
	const theme = ['primary', 'secondary', 'error', 'warning', 'default'];
	return (
		<Container>
			<Box width="100%">
				<h3>Sidebar with respective themeType</h3>
				<br />
				<Grid layout="flex row space-around center">
					{theme.map(item => (
						<Sidebar  width="200" height="400px" themeType={item} title={`${item}`}>
							<p>About</p>
							<p>Gallery</p>
							<p>Profile</p>
						</Sidebar>
					))}
				</Grid>
			</Box>
		</Container>
	)
}
export default DemoSidebar ;
