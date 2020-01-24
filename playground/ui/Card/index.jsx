import React from 'react';
import { Card,Box, Grid } from '../../../packages/ui';
import { Container } from './styles';

const  DemoCard = () => {
	const body = () => {
		return (
			<div>Hi I am Body</div>
		)
	};
	const theme = ['primary', 'secondary', 'error', 'warning', 'black'];
return (
	<Container>
			<Box width="100%" height="300px">
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
			<Box width="100%" height="200px">
				<h3>Card with only header and headerFooterThemeType</h3>
				<br />
				<Grid layout="flex  row space-around center">
					{theme.map(item => (
						<Card 
							header="Hi I am header " 
							headerFooterThemeType={item} 
							width="15%" 
						/>
					))}
				</Grid>
			</Box>
			<Box width="100%" height="200px">
				<h3>Card with only footer and headerFooterThemeType as props</h3>
				<br />
				<Grid layout="flex  row space-around center">
					{theme.map(item => (
						<Card 
							footer="Hi I am Footer"
							headerFooterThemeType={item}
							width="15%" 
						/>
					))}
				</Grid>
			</Box>
			<Box width="100%" height="200px">
				<h3>Card with only children and themeType as prop</h3>
				<br />
				<Grid layout="flex  row space-around center">
					{theme.map(item => (
						<Card width="15%" themeType={item}>
							<p>Card with Chidlren One</p>
							<p>Card with Children Two</p>
							<p>Card with Chidlren three</p>
						</Card>
					))}
				</Grid>
			</Box>
			<Box width="100%" height="200px">
				<h3>Card with only body</h3>
				<p>But its better to use Card with just children in this case</p>
				<br />
				<Grid layout="flex  row space-around center">
					{theme.map(item => (
						<Card 
							body={body()}
							width="15%" 
						/>
					))}
				</Grid>
			</Box>
	</Container>
  )
}
export default DemoCard ;
