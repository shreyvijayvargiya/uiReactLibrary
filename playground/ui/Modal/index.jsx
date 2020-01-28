import React, { useState } from 'react';
import { Modal } from '../../../packages/components';
import { Box } from '../../../packages/ui';
import { LivePreview, LiveEditor, LiveError, LiveProvider} from 'react-live';

const scope = { Modal, Box, useState, Box };

const code = `
	const [show, setShow ] = useState(false);
	render (
		<div>
			<button onClick={() => setShow(true)}>Modal</button>
			<Modal show={show} setShow={setShow}>
				<p>Hi I am Modal</p>
				<p>You are looking to Modal children</p>
			</Modal>
		</div>
	);
`

const DemoModal = () => {
	return (
		<Box width="100%" border="black">
			<LiveProvider code={code} scope={scope} noInline={true}>
				<LivePreview />
				<LiveEditor />
				<LiveError />
			</LiveProvider>
		</Box>
	);
};
export default DemoModal