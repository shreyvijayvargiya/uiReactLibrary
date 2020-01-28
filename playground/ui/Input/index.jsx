import React from 'react';
import { Input, Grid, Box } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const theme = ['primary', 'secondary', 'warning', 'default', 'error']
const scope = { Input, Grid, Box, theme };

const codeOne = 
`	
	<Box width="100%" border="black">
		<h3>Input with themeType and width as props</h3>
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Input placeholder={item} themeType={item} width="100px" />
			))};
		</Grid>
	</Box>
`;

const codeTwo = `
	<Box width="100%" border="black">
		<h3>Input with inputType as underline props</h3>
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Input placeholder={item} themeType={item} inputType="underline" width="100px" />
			))};
		</Grid>
	</Box>
`;
const codeThree =`	
	<Box width="100%" border="black">
		<h3>Input with height as 50px</h3>
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Input placeholder={item} themeType={item} width="100px" height="50px"/>
			))};
		</Grid>
	</Box>
`;

const codeFour = `
	<Box width="100%" border="black">
		<h3>Input with wdith as 200px</h3>
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Input placeholder={item} themeType={item} width="200px"/>
			))};
		</Grid>
	</Box>
`;

const DemoInput = () => {
	const codeItem = [codeOne, codeTwo, codeThree, codeFour];
	return (
		<div>
			{codeItem.map(item => (
				<Box width="100%" border="black">
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
export default DemoInput ;
