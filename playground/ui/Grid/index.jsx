import React from 'react';
import { Container } from './styles';
import { Grid, Card, Box } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const scope = { Grid, Box, Container};

const codeOne = `	
	<Box width="100%" border="primary">
		<h3>Grid Layout=flex row space-around center</h3>
		<br /><br />
		<Grid layout="flex row space-around center">
			<Box background="primary" width="25%" >Box One</Box>
			<Box background="primary" width="25%">Box Two</Box>
		</Grid>
		<br /><br />
	</Box>
`;
const codeTwo = 
`	<Box width="100%" border="primary">
		<h3>Grid Three children equal width</h3>
		<br /><br />
		<Grid layout="flex row space-between center">
			<Box border="primary" background="primary" width="25%">Box One</Box>
			<Box border="primary" background="primary" width="25%">Box Two</Box>
			<Box border="primary" background="primary" width="25%">Box Three</Box>
		</Grid>
	</Box>
	<br />
`;
const codeThree = `	
	<Box width="100%" border="primary">
		<h3>Grid  Layout= "flex column space-around center"</h3>
		<h3>Grid Three children equal width</h3>
		<br /><br />
		<Grid layout="flex column center center">
			<Box border="primary" background="primary" width="25%">Box One</Box>
			<Box border="primary" background="primary" width="25%">Box Two</Box>
			<Box border="primary" background="primary" width="25%">Box Three</Box>
		</Grid>
	</Box>
`;

const DemoGrid = () => {
	const codeItem = [codeOne, codeTwo, codeThree];
	return (
		<div>
			{codeItem.map(item => (
				<Box width="100%" border ="black">
					<LiveProvider code={codeOne} scope={scope}>
						<LivePreview />
						<LiveEditor />
						<LiveError />
					</LiveProvider>
				</Box>
			))}
		</div>
	 );
};
export default DemoGrid ;
