import { mount } from 'cypress/react';
import React from 'react';

import { Typography } from '../Typography';
import Tooltip from './Tooltip';

describe('Tooltip.cy.tsx', () => {
	it('The Tooltip component and its children are rendering', () => {
		mount(
			<Tooltip title="Tooltip Title">
				<Typography>Tooltip text</Typography>
			</Tooltip>
		);
		cy.get('.MuiTypography-root').should('have.text', 'Tooltip text');
		cy.get('.MuiTypography-root').trigger('mouseover');
		cy.get('.MuiBox-root > .MuiTypography-root').should(
			'have.text',
			'Tooltip Title'
		);
	});

	it('Tooltip is showing on hover', () => {
		mount(
			<Tooltip title="Tooltip Title">
				<Typography>Tooltip text</Typography>
			</Tooltip>
		);
		cy.get('.MuiTypography-root').trigger('mouseover');
		cy.get('.MuiBox-root > .MuiTypography-root').should(
			'have.text',
			'Tooltip Title'
		);
	});
});
