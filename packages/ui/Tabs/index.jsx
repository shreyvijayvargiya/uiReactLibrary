import React from 'react';
import { Container } from './styles';
import { Grid, Box, Card } from '../index';


const Tab = ({ children }) => {
	// console.log(children, 'React.Children');
	return (
		<Card>
			<Grid layout="flex space-around center">
				{/* {children.map(item =>{
					console.log(item.type, 'item.type');
					if(item.type === 'TabPanel(_ref'){
						console.log(item.props.children, 'jfjrf')
						return (
							<TabPanel>{item.props.children}</TabPanel>
						)
					}
				})} */}
			</Grid>
			{/* <div>
				<Box>Child one content</Box>
			</div> */}
		</Card>
	)
}
export default Tab;
