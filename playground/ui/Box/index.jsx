import React from 'react';
import { Box, Grid } from '../../../packages/ui';
import { Container } from './styles';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const typeOne = ['primary', 'default', 'warning'];
const typeTwo = ['error', 'secondary', 'footer'];
const scope = { Box, Grid, Container, typeOne, typeTwo };

const code = `
		<Container>
			<h4>Box</h4>
			<Box border="black" width="100%">
				<h4>Box wit background and width as prop</h4>
				<Grid layout="flex row space-around center">
					{typeOne.map(item =>(
						<Box background={item} borderRequired width="20%">
							<h3>{item}</h3>
							<p>Background: {item} </p>
						</Box>
						))}
				</Grid>
				<Grid layout="flex row space-around center">
				{typeTwo.map(item =>(
						<Box background={item} borderRequired width="20%">
							<h3>{item}</h3>
						</Box>
				))}
				</Grid>
			</Box>
		</Container>	
`;
const codeTwo = `
	<Container>
		<Box border="black" width="100%">
			<h4>Box with border and width as prop</h4>
			<Grid layout="flex row space-around center">
				{typeOne.map(item => (
					<Box border={item} width="20%">
						<p>Pass the borderRequired props </p>
						<p>and border as {item}</p>
					</Box>
				))}
			</Grid>
		</Box>
	</Container>
`;
const codeThree = `
	<Container>
		<Box border="black" width="100%">
			<h3>Box with Width as prop</h3>
			<Box background="primary" width="50%">
				<p>Hi I am Box with width 100%</p>
			</Box>
		</Box>
	</Container>
`;
const codeOne = `
	<Container>
		<Box border="black" width="100%">
			<h3>Box without Width as prop</h3>
			<Box background="primary">
				<p>Hi I am Box without width</p>
			</Box>
		</Box>
	</Container>
`;
const codeItem = [code, codeOne, codeTwo, codeThree];

const DemoBox = () => {
	return (
		<div>
			{codeItem.map(item => (
				<LiveProvider code={item} scope={scope}>
					<LivePreview />
					<LiveEditor />
					<LiveError />
				</LiveProvider>
			))}
		</div>
	);
};
export default DemoBox ;
