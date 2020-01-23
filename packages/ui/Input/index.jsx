import React from 'react';
import { InputContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Input = ( { placeholder, width, height, inputType, themeType, value } ) => {
return (
	<ThemeProvider theme={ theme }>
		<InputContainer 
			placeholder={placeholder} 
			themeType={themeType} 
			inputType={inputType} 
			width={width} 
			height={height} 
			value={value ? value: null}
		/>
	</ThemeProvider>
  )
}
export default Input ;
