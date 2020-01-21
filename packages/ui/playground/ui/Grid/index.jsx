import React from 'react';
import { Container } from './styles';
import { Grid, Card, Box } from '../../../index';

const DemoGrid = () => {
return (
	<Container><br />
	<Box background="secondary" width={50}>
		<h3>Grid Layout=flex space-around center</h3>
		<Grid layout="flex space-around center">
			<Card themeType="primary" width={33}>Card One</Card>
			<Card themeType="primary" width={33}>Card Two</Card>
		</Grid><br /><br />
	</Box>
		<h3>Grid Three children equal width</h3>
		<Grid layout="flex space-between center">
			<Card themeType="primary" width={33}>Card One</Card>
			<Card themeType="primary" width={33}>Card Two</Card>
			<Card themeType="primary" width={33}>Card Three</Card>
		</Grid>
	</Container>
  )
}
export default DemoGrid ;
