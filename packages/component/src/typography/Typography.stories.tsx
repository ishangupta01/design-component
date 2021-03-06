import {
	FontSizeTokens,
	FontWeightTokens,
	FontDecorationToken,
	TypographyProps,
	FontTransformToken,
} from '@blue-learn/schema';
import React from 'react';
import Typography from './Typography';

export default {
	title: 'Example/Typography',
	component: Typography,
	argTypes: {
		label: 'Lorem ipsum dolor sit.',
	},
};

const Template = (args: TypographyProps) => (
	<Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	label:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	fontSize: FontSizeTokens.sm,
	fontWeight: FontWeightTokens.normal,
	textTransform: FontTransformToken.uppercase,
	textDecorationLine:
		FontDecorationToken.underline,
};

Primary.argTypes = {
	fontSize: {
		control: 'select',
		options: [
			...Object.values(FontSizeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	fontWeight: {
		control: 'select',
		options: [
			...Object.values(FontWeightTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	textTransform: {
		control: 'select',
		options: [
			...Object.values(FontTransformToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	textDecorationLine: {
		control: 'select',
		options: [
			...Object.values(FontDecorationToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
