import React from 'react';
import { Avatar, Grid, Box } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const theme = [
	{ theme: 'primary', name: 'R'},
	{ theme: 'secondary', name: 'E'},
	{ theme: 'warning', name: 'A'},
	{ theme: 'error', name: 'C'},
	{ theme: 'black', name: 'T'}
];
const scope = { Avatar,  Grid, theme, Box };

const codeOne = `
	<Box border="black" width="100%">
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Avatar themeType={item.theme}>
					Avatar
				</Avatar>
			))}
		</Grid>
	</Box>
`;
const codeTwo = `
	<Box border="black" width="100%">
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Avatar themeType={item.theme}>
					{item.name}
				</Avatar>
			))}
		</Grid>
	</Box>	
`;

const DemoAvatar = () => {
	const codeItem = [codeOne, codeTwo];
	return (
		<div>
			{codeItem.map(item => (
				<Box border="black" width="100%">
					<h3>Avatar with themeType as prop</h3>
					<LiveProvider code={item} scope={scope}>
						<LivePreview />
						<LiveEditor />
						<LiveError />
					</LiveProvider>
			</Box>
			))}
		</div>
	);
};

export default DemoAvatar;
