import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { buttonTypeTokensMap } from './button';
import { borderRadiusTypeTokensMap } from './cornerRadius';
import { spaceTypeTokensMap } from './space';
import { FontFamilyTokensMap } from '../FontFamily';
import { inputTypeTokensMap } from './textInput';

export const lightMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	button: buttonTypeTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	space: spaceTypeTokensMap,
	fontFamily: FontFamilyTokensMap,
	spaces: spaceTypeTokensMap,
	textInput: inputTypeTokensMap,
};
