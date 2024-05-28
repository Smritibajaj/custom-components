/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import { ThemeWrapper } from '../../../../cypress/utils/ThemeWrapper';
import Circular from './Circular';

describe('Circular.cy.tsx', () => {
	it('should mount and render circular Loader properly.', () => {
		mount(
			<ThemeWrapper>
				<Circular data-cy="loader" />
			</ThemeWrapper>
		);
	});

	it('should apply color prop properly.', () => {
		mount(
			<ThemeWrapper>
				<Circular data-cy="circular-loader" color="D-50" />
			</ThemeWrapper>
		);
		cy.get('[data-cy="circular-loader"]').should(
			'have.class',
			'MuiCircularProgress-root'
		);
		cy.get('[data-cy="circular-loader"]')
			.should('have.css', 'color')
			.and($p => {
				expect($p).to.be.equal('rgb(128, 127, 129)');
			});
	});

	it('should apply size prop properly.', () => {
		mount(
			<ThemeWrapper>
				<Circular data-cy="circular-loader" size={30} />
			</ThemeWrapper>
		);
		cy.get('[data-cy="circular-loader"]').should(
			'have.class',
			'MuiCircularProgress-root'
		);
		cy.get('[data-cy="circular-loader"]')
			.should('have.css', 'width')
			.and($p => {
				expect($p).to.be.equal('30px');
			});
		cy.get('[data-cy="circular-loader"]')
			.should('have.css', 'height')
			.and($p => {
				expect($p).to.be.equal('30px');
			});
	});
});
