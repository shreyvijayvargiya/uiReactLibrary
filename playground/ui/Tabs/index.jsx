import React from 'react';
import { Tabs, TabPanel, TabContent } from '../../../packages/ui';

const DemoBox = () => {
return (
	<div>
		<Tabs >
			<TabPanel>Child One</TabPanel>
			<TabPanel>Child Two</TabPanel>
			<TabContent>Content One</TabContent>
			<TabContent>Content Two</TabContent>
		</Tabs>
	</div>
  )
}
export default DemoBox ;
