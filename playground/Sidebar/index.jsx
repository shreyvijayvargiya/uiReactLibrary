import React from 'react';
import { Sidebar } from '../../packages/components';
import { Container } from './styles';

const DemoSidebar = () => {
	return (
		<Container>
			<Sidebar  width="200" themeType="default" title="Sidebar">
				<p>About</p>
				<p>Gallery</p>
				<p>Profile</p>
			</Sidebar>
		</Container>
	)
}
export default DemoSidebar ;
