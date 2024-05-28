/// <reference types="cypress" />

import { mount } from 'cypress/react';
import React from 'react';

import Typography from './Typography';

describe('Testing Typography component exists', () => {
	it('should render a typography', () => {
		const text = 'Typography text component';
		mount(<Typography variant="bodyMedium">{text}</Typography>);
		cy.contains(text);
		// cy.contains(text).should('have.css', 'font-size', '13px');
	});
});
