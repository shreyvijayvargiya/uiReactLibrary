import React from 'react';
import { Container, Text } from './styles';
import { Card, Grid, Box } from '../../packages/ui';
import { theme } from '../../packages/theme/theme';
import { ThemeProvider } from  'styled-components';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const colors = ["primary", "secondary", 'error', 'warning', 'success', 'background','headerBackground' ];
const size = ['fs1' , 'fs2', 'fs3', 'fs4', 'fs5', 'fs6', 'fs7', 'fs8'];

const scope = { ThemeProvider, theme, Card, Grid, Container, Text, colors, size, Box};

const codeOne = `
	<ThemeProvider theme={theme}>
		<Box width="100%" border="black">
			<h3>Color pallete</h3><br />
				<Grid layout="flex row space-around center">
					{colors.map(item => {
						return (
							<div>
								<Card themeType={item}>
									<div>{item}</div>
								</Card>
							</div>
						)
					})}
				</Grid>
			</Box>
	</ThemeProvider>
`;

const codeTwo = `	
	<ThemeProvider theme={ theme }>
		<Container>
			<br />
			<Card>
				<h3>Font sizes</h3>
				{size.map(item => (
					<Text size={item}>
						Hi, my font size is {theme[item]}
					</Text>
				))}
			</Card>
		</Container>
	</ThemeProvider>
`;

const Theme = () => {
	const codeItem = [codeOne, codeTwo];
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
};
export default Theme;




