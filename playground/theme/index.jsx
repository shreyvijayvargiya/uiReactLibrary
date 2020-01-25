import React from 'react';
import { Container, Text } from './styles';
import { Card, Grid } from '../../packages/ui';
import { theme } from '../../packages/theme/theme';
import { ThemeProvider } from  'styled-components';

const Theme = () => {
	const colors = ["primary", "secondary", 'error', 'warning', 'success', 'background','headerBackground' ];
	const size = ['fs1' , 'fs2', 'fs3', 'fs4', 'fs5', 'fs6', 'fs7', 'fs8'];
	return (
		<ThemeProvider theme={ theme }>
			<Container>
				<br />
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
				<br /><br /><br />
				<Card>
					<h3>Font sizes</h3>
					{size.map(item => (
						<Text size={item}>{`Hi, my font size is  ${theme[item]}`}</Text>
					))}
				</Card>
			</Container>
		</ThemeProvider>
	)
};
export default Theme;




