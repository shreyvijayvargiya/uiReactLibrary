import React from 'react';
import { Container } from './styles';

const Radio =  ( { label }) => {
return (
	<Container>
		{label ? label: null}
		<input type="radio" />
	</Container>
  )
}
export default Radio ;
