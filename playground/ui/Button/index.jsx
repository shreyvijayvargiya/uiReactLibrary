import React from 'react';
import { Button, Grid, Card } from '../../../packages/ui';
import { Container } from './styles';

const DemoButton = () => {
	const themeType = [ 'primary', 'secondary', 'warning', 'error', 'black'];
	return (
		<Container>
		<Card height="200px">
			<h3>Button with buttonType="link"</h3>
			<br /><br />
			<Grid layout="flex row space-around center">
				{themeType.map(item => (
					<Button themeType={item} buttonType="link">Button</Button>
				))}
			</Grid>
		</Card>
		<Card height="200px">
			<h3>Button with no buttonType</h3>
			<br /><br />
			<Grid layout="flex row space-around center">
				{themeType.map(item => (
					<Button themeType={item}>Button</Button>
				))}
			</Grid>
		</Card>
		</Container>
	)
}
export default DemoButton ;
