import React from 'react';
import { Button, Grid, Box } from '../../../packages/ui';
import { Container } from './styles';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const themeType = [ 'primary', 'secondary', 'warning', 'error', 'black'];
const scope = { Button, Grid, Box, Container, themeType };

const codeOne = `
	<Box width="100%" border="primary">
		<h3>Button with buttonType="link"</h3>
		<br /><br />
		<Grid layout="flex row space-around center">
			{themeType.map(item => (
				<Button themeType={item} buttonType="link">Button</Button>
			))}
		</Grid>
	</Box>
`; 
const codeTwo = `
	<Box border="black" width="100%">
		<h3>Button with no buttonType</h3>
		<br /><br />
		<Grid layout="flex row space-around center">
			{themeType.map(item => (
				<Button themeType={item}>Button</Button>
			))}
		</Grid>
	</Box>
`;

const DemoButton = () => {
	const codeItem  = [codeOne, codeTwo];
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
	)
}
export default DemoButton ;
