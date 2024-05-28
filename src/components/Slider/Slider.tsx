import MuiSlider, { type SliderProps } from '@mui/material/Slider';
import React, { memo } from 'react';

const Slider = (props: SliderProps) => <MuiSlider {...props} />;

export default memo(Slider);
