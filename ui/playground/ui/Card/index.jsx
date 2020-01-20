import React from 'react';
import { Card } from '../../../index';
import { Container } from './styles';

const  DemoCard = () => {
	const body = () => {
		return (
			<div>Hi I am Body</div>
		)
	}
return (
	<Container>
		<Card header="Hi I am header " body={body()} footer="Hi i am footer" headerFooterThemeType="primary" width={50} />
	</Container>
  )
}
export default DemoCard ;
