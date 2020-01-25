import React from 'react';
import { Input, Grid, Box } from '../../../packages/ui';

const DemoInput = () => {
	const theme = ['primary', 'secondary', 'warning', 'default', 'error']
	return (
		<div>
			<Box width="100%" border="black">
				<h3>Input with themeType and width as props</h3>
				<Grid layout="flex row space-around center">
					{theme.map(item => (
						<Input placeholder={item} themeType={item} width="100px" />
					))};
				</Grid>
			</Box>
			<br />
			<Box width="100%" border="black">
				<h3>Input with inputType as underline props</h3>
				<Grid layout="flex row space-around center">
					{theme.map(item => (
						<Input placeholder={item} themeType={item} inputType="underline" width="100px" />
					))};
				</Grid>
			</Box>
			<br />
			<Box width="100%" border="black">
				<h3>Input with height as 50px</h3>
				<Grid layout="flex row space-around center">
					{theme.map(item => (
						<Input placeholder={item} themeType={item} width="100px" height="50px"/>
					))};
				</Grid>
			</Box>
			<br />
			<Box width="100%" border="black">
				<h3>Input with wdith as 200px</h3>
				<Grid layout="flex row space-around center">
					{theme.map(item => (
						<Input placeholder={item} themeType={item} width="200px"/>
					))};
				</Grid>
			</Box>
		</div>
  	)
}
export default DemoInput ;
