import MuiCard from '@mui/material/Card';
import React from 'react';

import Actions from './Actions';
import Content from './Content';
import Header from './Header';
import Media from './Media';
import type { CardProps } from './types';

const Card = ({ children, ...restProps }: CardProps) => (
	<MuiCard {...restProps}>{children}</MuiCard>
);

Card.Actions = Actions;
Card.Content = Content;
Card.Header = Header;
Card.Media = Media;

export default Card;
