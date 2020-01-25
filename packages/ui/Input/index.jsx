import React from 'react';
import { InputContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Input = ( { placeholder, width, height, inputType, themeType, value, disabled } ) => {
return (
	<ThemeProvider theme={ theme }>
		<InputContainer 
			placeholder={placeholder} 
			themeType={themeType} 
			inputType={inputType} 
			width={width} 
			height={height} 
			value={value ? value: null}
			disabled={disabled}
		/>
	</ThemeProvider>
  )
}
export default Input ;
