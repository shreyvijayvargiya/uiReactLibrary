import React from 'react';
import { Dropdown, Grid, Box } from '../../../packages/ui';

const DemoDropdown = () => {
	const theme = ['primary', 'secondary', 'warning' , 'error', 'default']
	return (
		<div>
			<h3>Click on Dropdown</h3>
			<Box width="100%">
				<h3>Dropdown with themeType as prop</h3>
				<Grid  layout="flex row space-around center">
				{theme.map(item => (
					<Dropdown header={`${item} Dropdown`} themeType={item}>
						<div>
							<p>Children one</p>
							<p>Children Two</p>
							<p>Children Three</p>
						</div>
					</Dropdown>
				))}
				</Grid>
			</Box>
		</div>
	);
};
export default DemoDropdown;
