import React from 'react';
import { Container } from './styles';
import { Grid, Card, Box } from '../../../packages/ui';

const DemoGrid = () => {
return (
	<Container><br />
		<Box width="60%" border="primary">
			<h3>Grid Layout=flex row space-around center</h3>
			<Grid layout="flex row space-around center">
				<Box background="primary" >Box One</Box>
				<Box background="primary" >Box Two</Box>
			</Grid><br /><br />
		</Box>
		<Box width="60%" border="primary">
			<h3>Grid Three children equal width</h3>
			<Grid layout="flex row space-between center">
				<Box border="primary" background="primary" >Box One</Box>
				<Box border="primary" background="primary" >Box Two</Box>
				<Box border="primary" background="primary" >Box Three</Box>
			</Grid>
		</Box>
		<h3></h3>
	</Container>
  )
}
export default DemoGrid ;
