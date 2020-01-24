import React, { useState } from 'react';
import { Modal } from '../../packages/components';

const DemoModal = () => {
	const [show, setShow ] = useState(false)
	return (
		<div>
			<button onClick={() => setShow(true)}>Modal</button>
			<Modal show={show} setShow={setShow}>
				<p>Hi I am Modal</p>
				<p>You are looking to Modal children</p>
			</Modal>
		</div>
	);
};
export default DemoModal