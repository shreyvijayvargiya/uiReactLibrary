import React from 'react';
import { CheckboxContainer, Container, Box } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme'; 


const Checkbox = ( { label, onChange, width, height, themeType   } ) => {
return (
	<ThemeProvider theme={ theme }>
		<Container>
			<Box width={width} height={height} themeType={themeType}>
				<CheckboxContainer
					type="checkbox"
					width={width} 
					height={height}
					onChange={onChange}
				/>
			</Box>
			{label ? label: null}
		</Container>
	</ThemeProvider>
  );
};
export default Checkbox ;
