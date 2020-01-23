import React from 'react';
import { Container } from './styles';
import { Card } from '../../packages/ui';

const Theme = () => {
	const colors = ["primary", "secondary", 'error', 'warning', 'success', 'background','headerBackground' ];
	return (
		<div>
			<br />
			<h3>Color pallete</h3><br />
			<Container>
				{colors.map(item => {
					return (
						<div>
							<Card themeType={item}>
								<div>{item}</div>
							</Card>
						</div>
					)
				})}
			</Container>
			<br /><br />
			<h3>Font sizes</h3>
			
		</div>
	)
};
export default Theme;




