import React from 'react';
import { Container } from './styles';

const Grid = ({ layout, children }) => {
return (
	<Container layout={layout}>
		{children}
	</Container>
  )
}
export default Grid ;

