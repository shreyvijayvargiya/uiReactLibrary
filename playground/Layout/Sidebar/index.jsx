import React from 'react';
import { Sidebar } from '../../../packages/components';
import { Container } from './styles';
import { Box, Grid } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const theme = ['primary', 'secondary', 'error', 'warning', 'default'];
const scope ={ Box, Container, Sidebar, Grid, theme};
const code = 
`	<Container>
		<Box width="100%" border="black" height="400px">
			<h3>Sidebar with respective themeType</h3>
			<br />
			<Grid layout="flex row space-around center">
				{theme.map(item => (
					<Sidebar  width="150" height="200px" themeType={item} title={item}>
						<p>About</p>
						<p>Gallery</p>
						<p>Profile</p>
					</Sidebar>
				))}
			</Grid>
		</Box>
	</Container>
`;
const DemoSidebar = () => {
	return (
		<Box width="100%" border="black">
			<LiveProvider code={code} scope={scope}>
				<LivePreview />
				<LiveEditor />
				<LiveError />
			</LiveProvider>
		</Box>
	)
}
export default DemoSidebar ;
