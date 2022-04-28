import {
	ButtonSize,
	ButtonType,
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
	CornerRadiusTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import { colorTokensMap } from '../../colors';
import { borderRadiusTypeTokensMap } from '../cornerRadius';
import { spaceTypeTokensMap } from '../space';

export const buttonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.LargeFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.MediumFilled]: {
			// size: ButtonSize.Medium,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.MD,
		},
		[ButtonTypeTokens.SmallFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.SM,
		},
		[ButtonTypeTokens.IconFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.MD,
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.SM,
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeOutline]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.MediumOutline]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.SmallOutline]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.IconOutline]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.LargeGhost]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.MediumGhost]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.SmallGhost]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.IconGhost]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeElevated]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.MediumElevated]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.SmallElevated]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.IconElevated]: {
			// size: ButtonSize.Large,
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
	};
