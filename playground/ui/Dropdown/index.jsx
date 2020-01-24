import React from 'react';
import { Dropdown } from '../../../packages/ui';

const DemoDropdown = () => {
	return (
		<div>
			<Dropdown header="Dropdown">
				<div>
					<p>Children one</p>
					<p>Children Two</p>
					<p>Children Three</p>
				</div>
			</Dropdown>
		</div>
	);
};
export default DemoDropdown;
