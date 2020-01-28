import React from 'react';
import { Dropdown, Grid, Box } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const theme = ['primary', 'secondary', 'warning' , 'error', 'default']
const scope = { Dropdown, Grid, Box, theme };

const code = `
	<div>
		<h3>Click on Dropdown</h3>
		<Box width="100%" border="black">
			<h3>Dropdown with themeType as prop</h3>
			<Grid  layout="flex row space-around center">
			{theme.map(item => (
				<Dropdown header={item} themeType={item}>
					<div>
						<p>Children one</p>
						<p>Children Two</p>
						<p>Children Three</p>
					</div>
				</Dropdown>
			))}
			</Grid>
		</Box>
	</div>
`;

const DemoDropdown = () => {
	return (
		<Box width="100%" border="black">
			<LiveProvider code={code} scope={scope}>
				<LivePreview />
				<LiveEditor />
				<LiveError />
			</LiveProvider>
		</Box>
	);
};
export default DemoDropdown;
