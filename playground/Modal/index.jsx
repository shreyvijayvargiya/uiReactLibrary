import React, { useState } from 'react';
import { Modal } from '../../packages/components';

const DemoModal = () => {
	const [show, setShow ] = useState(false)
	return (
		<div>
			<Modal show={show} setShow={setShow}>
				<p>Hi I am Modal Chidlren</p>
				<p>You are looking to Modal children</p>
			</Modal>
			<button onClick={() => setShow(true)}>Modal</button>
		</div>
	);
};
export default DemoModal