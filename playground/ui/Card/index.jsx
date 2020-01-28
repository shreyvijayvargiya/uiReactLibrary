import React from 'react';
import { Card,Box, Grid } from '../../../packages/ui';
import { Container } from './styles';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const body = () => {
	return (
		<div>Hi I am Body</div>
	)
};
const theme = ['primary', 'secondary', 'error', 'warning', 'black'];
const scope = { theme, body, Container, Box, Card, Grid };

const codeOne = `
	<Box width="100%" height="300px" border="black">
		<h3>Card wtih header, body and footer as props </h3>
		<h4>Other props passed for colors are headerFooterThemeType and width</h4>
		<br />
		<Grid layout="flex row space-around center">
			{theme.map(item => (
				<Card 
					header="Hi I am header " 
					body={body()} 
					footer="Hi i am footer" 
					headerFooterThemeType={item} 
					width="15%" 
				/>
			))}
		</Grid>
	</Box>
`;
const codeTwo = 
`	<Box width="100%" height="300px" border="black">
		<h3>Card with only header and headerFooterThemeType</h3>
		<br />
		<Grid layout="flex  row space-around center">
			{theme.map(item => (
				<Card 
					header="Hi I am header " 
					headerFooterThemeType={item} 
					width="20%" 
				/>
			))}
		</Grid>
	</Box>
`;
const codeThree = 
`	<Box width="100%" height="300px" border="black">
		<h3>Card with only footer and headerFooterThemeType as props</h3>
		<br />
		<Grid layout="flex  row space-around center">
			{theme.map(item => (
				<Card 
					footer="Hi I am Footer"
					headerFooterThemeType={item}
					width="20%" 
				/>
			))}
		</Grid>
	</Box>
`;

const codeFour = `
	<Box width="100%" height="300px" border="black">
		<h3>Card with only children and themeType as prop</h3>
		<br />
		<Grid layout="flex  row space-around center">
			{theme.map(item => (
				<Card width="20%" themeType={item}>
					<p>Card with Chidlren One</p>
					<p>Card with Children Two</p>
					<p>Card with Chidlren three</p>
				</Card>
			))}
		</Grid>
	</Box>
`;
const codeFive = `
	<Box width="100%" height="300px" border="black">
		<h3>Card with only body</h3>
		<p>But its better to use Card with just children in this case</p>
		<br />
		<Grid layout="flex  row space-around center">
			{theme.map(item => (
				<Card 
					body={body()}
					width="20%" 
				/>
			))}
		</Grid>
	</Box>
`;

const  DemoCard = () => {
	const codeItem = [codeOne, codeTwo, codeThree, codeFour, codeFive];
	return (
		<Container>
			{codeItem.map(item => (
				<Box width="100%" border="black">
					<LiveProvider code={item} scope={scope}>
					<LivePreview />
					<LiveEditor />
					<LiveError />
					</LiveProvider>
				</Box>
			))}
		</Container>
	 );
};
export default DemoCard ;
